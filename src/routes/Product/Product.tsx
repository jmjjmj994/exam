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
import { useBoolean } from 'src/hooks/use-boolean.hook';
import './product.css';
import { useEffect } from 'react';
export const Product = () => {
  const { id } = useParams();
  const [data, isLoading] = useFetchVenue(id);
  const isData = Object.values(data).length > 0;
  const [active, setFalse, setTrue] = useBoolean();
  const [isMobile] = useMediaMatch('768');
  console.log(data);
  useEffect(() => {
    if (!isMobile) setFalse();
  }, [isMobile]);
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
            className={`${
              isMobile && 'flex-col py-10'
            } flex items-center gap-4`}
          >
            <section className={`${isMobile && 'w-full'} bg-red-300 w-[50%]`}>
              <ProductOwner avatar={data.owner.avatar} name={data.owner.name} />
              <ProductDescription description={data.description} />
              <ProductDetails
                bookings={data._count.bookings}
                created={data.created}
                maxGuests={data.maxGuests}
                rating={data.rating}
              />
              <ProductLocation location={data.location} />
              <ProductAmenities meta={data.meta} />
            </section>
            <ProductForm
              active={active}
              onClick={setFalse}
              isMobile={isMobile}
              id={data.id}
              bookings={data.bookings}
              price={data.price}
              maxGuests={data.maxGuests}
              name={data.name}
              image={data.media[0].url}
            />

            <button
              onClick={setTrue}
              className={`${
                isMobile ? 'block' : 'hidden'
              } bg-custom-primary text-white w-full py-4 rounded-sm`}
            >
              Book
            </button>
          </section>
        </>
      )}
    </div>
  );
};
