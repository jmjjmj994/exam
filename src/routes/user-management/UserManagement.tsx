import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { options } from 'src/api/config/api-options';
import { useApiLoader } from 'src/api/hooks/use-api-loader.hook';
import { useApiError } from 'src/api/hooks/use-api-error.hook';
import { Spinner } from 'src/api/ui/Spinner';
import { venueSchema, VenueType } from 'src/api/validation/venue-schema';
import { UserManagementTable } from './UserManagementTable';
import { Helmet } from 'react-helmet-async';
import './management.css';

export const UserManagement = () => {
  const [isLoading, handleIsLoading] = useApiLoader();
  const [error, handleError, clearError] = useApiError();
  const [data, setData] = useState<VenueType[]>([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://v2.api.noroff.dev/holidaze/profiles/${name}/venues?_bookings=true`,
        {
          headers: options.headers,
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `${response.statusText} error in UserManagement component`
            );
          }
          return response.json();
        })
        .then((results) => {
          const parsedData = venueSchema.safeParse(results);
          if (!parsedData.success)
            console.error(
              'Error while parsing data in UserManagement component'
            );

          setData(results.data);
          clearError();
          handleIsLoading();
        })
        .catch((error) => {
          console.log(error);
          handleIsLoading();
        });
    };
    fetchData();
  }, [name]);

  const loading = <Spinner />;
  if (isLoading) {
    return loading;
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Helmet>
        <title>Holidaze | user management</title>
      </Helmet>
      <section className="w-full h-full flex flex-col gap-10 py-20">
        <h1>Manage your venues</h1>
        <UserManagementTable data={data} />
      </section>
    </div>
  );
};
