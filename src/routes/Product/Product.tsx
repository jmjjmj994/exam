import { useParams } from 'react-router-dom';
import { useFetchVenue } from 'src/api/fetch/use-fetch-venue.hook';
import { ProductImage } from './ProductImage';
import { Helmet } from 'react-helmet-async';
export const Product = () => {
  const { id } = useParams();
  const [data, isLoading] = useFetchVenue(id);

  return (
    <div>
      <Helmet>
        <title>product</title>
      </Helmet>
      <ProductImage media={data.media} />
    </div>
  );
};
