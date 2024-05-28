import { useParams } from 'react-router-dom';
import { useFetchVenue } from 'src/api/fetch/use-fetch-venue.hook';
import { ProductImage } from './ProductImage';
import { ProductOwner } from './ProductOwner';
import { ProductDescription } from './ProductDescription';
import { ProductAmenities } from './ProductAmenities';
import { ProductLocation } from './ProductLocation';
import { ProductDetails } from './ProductDetails';
import { ProductForm } from './ProductForm';
import { Helmet } from 'react-helmet-async';
import { Spinner } from 'src/api/ui/Spinner';
import { useMediaMatch } from 'src/hooks/use-match-media.hook.tsx';
import './product.css';
export const Product = () => {
  const { id } = useParams();
  const [data, isLoading] = useFetchVenue(id);
  const isData = Object.values(data).length > 0;

  const [isMobile] = useMediaMatch('1240');

  return (
    <div className="relative ">
      <Helmet>
        <title>product</title>
      </Helmet>
      {isLoading && <Spinner />}
      {isData && !isLoading && (
        <>
          <ProductImage media={data.media} />
          <section
            className={`${isMobile && 'flex-col '} flex justify-between gap-4`}
          >
            <section
              className={`${
                isMobile && 'w-full'
              }  rounded-md px-4 py-4  w-[50%] self-start`}
            >
              {data.owner && data.owner.avatar && data.owner.name && (
                <ProductOwner
                  avatar={data.owner.avatar}
                  name={data.owner.name}
                />
              )}
              <ProductDescription description={data.description} />
              <ProductDetails
                bookings={data._count?.bookings || 0}
                created={data.created || ''}
                maxGuests={data.maxGuests}
                rating={data.rating}
              />
              <ProductLocation location={data.location} />
              <ProductAmenities meta={data.meta} />
            </section>
            <ProductForm
              isMobile={isMobile}
              id={data.id}
              bookings={data.bookings}
              price={data.price}
              maxGuests={data.maxGuests}
              name={data.name}
              image={data.media[0].url}
              location={data.location}
            />
          </section>
        </>
      )}
    </div>
  );
};
