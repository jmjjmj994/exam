import { Helmet } from 'react-helmet-async';
import { UpdateVenueForm } from './UpdateVenueForm';
import { useFetchVenue } from 'src/api/fetch/use-fetch-venue.hook';
import { useParams } from 'react-router-dom';
import { VenueType } from 'src/api/validation/venue-schema';
import { Spinner } from 'src/api/ui/Spinner';

export const UpdateVenue: React.FC<VenueType> = () => {
  const { id } = useParams();
  const [data, isLoading] = useFetchVenue(id);

  const loading = <Spinner />;
  if (isLoading) {
    return loading;
  }

  return (
    <section className="h-full w-full flex flex-col justify-center  bg-blue-200 ">
      <Helmet>
        <title>Holidaze | update venue </title>
      </Helmet>
      <h1>Update venue</h1>
      <section className="bg-orange-500 h-full w-full flex justify-center items-center">
        <UpdateVenueForm
          name={data.name}
          media={data.media}
          wifi={data.meta.wifi}
          pets={data.meta.pets}
          parking={data.meta.parking}
          breakfast={data.meta.breakfast}
          description={data.description}
          maxGuests={data.maxGuests}
        />
      </section>
    </section>
  );
};
