import { Helmet } from 'react-helmet-async';
import { UpdateVenueForm } from './UpdateVenueForm';
import { useFetchVenue } from 'src/api/fetch/use-fetch-venue.hook';
import { useParams } from 'react-router-dom';
import { VenueType } from 'src/api/validation/venue-schema';
import { Spinner } from 'src/api/ui/Spinner';
import { UpdatePreview } from './UpdatePreview';

export const UpdateVenue: React.FC<VenueType> = () => {
  const { id } = useParams();
  const [data, isLoading] = useFetchVenue(id);
  console.log(data);
  const loading = <Spinner />;
  if (isLoading) {
    return loading;
  }

  return (
    <section className="h-full w-full flex flex-col justify-center items-center">
      <Helmet>
        <title>Holidaze | update venue </title>
      </Helmet>

      <section className=" max-w-[50rem] w-full">
        <h1 className=" text-left w-full">Update venue</h1>

        <UpdatePreview media={data.media} />
        <UpdateVenueForm
          name={data.name}
          media={data.media}
          wifi={data.meta.wifi}
          pets={data.meta.pets}
          parking={data.meta.parking}
          breakfast={data.meta.breakfast}
          description={data.description}
          maxGuests={data.maxGuests}
          price={data.price}
        />
      </section>
    </section>
  );
};
