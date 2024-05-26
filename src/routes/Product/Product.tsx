import { useParams } from 'react-router-dom';
import { useFetchVenue } from 'src/api/fetch/use-fetch-venue.hook';
import { ProductImage } from './ProductImage';
import { ProductOwner } from './ProductOwner';
import { ProductDescription } from './ProductDescription';
import { ProductAmenities } from './ProductAmenities';
import { ProductLocation } from './ProductLocation';
import { ProductDetails } from './ProductDetails';
import { Helmet } from 'react-helmet-async';
import { Spinner } from 'src/api/ui/Spinner';
import './product.css';
export const Product = () => {
  const { id } = useParams();
  const [data, isLoading] = useFetchVenue(id);
  const isData = Object.values(data).length > 0;
  console.log(data);
  return (
    <div className="relative ">
      <Helmet>
        <title>product</title>
      </Helmet>
      {isLoading && <Spinner />}
      {isData && !isLoading && (
        <>
          <ProductImage media={data.media} />
          <section className="max-w-[40rem] flex flex-col gap-4">
            <ProductOwner avatar={data.owner.avatar} name={data.name} />
            <ProductDescription description={data.description} />
            <section className="product-grid">
              <ProductDetails
                bookings={data._count.bookings}
                created={data.created}
                maxGuests={data.maxGuests}
                rating={data.rating}
              />
              <ProductLocation location={data.location} />
              <ProductAmenities meta={data.meta} />
            </section>
          </section>
        </>
      )}
    </div>
  );
};
