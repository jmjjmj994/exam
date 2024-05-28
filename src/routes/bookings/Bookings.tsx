import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApiLoader } from 'src/api/hooks/use-api-loader.hook';
import { options } from 'src/api/config/api-options';
import { UserBookingType, userBookingsSchema } from './user-bookings-schema';
import { Spinner } from 'src/api/ui/Spinner';
import { BookingsCard } from './BookingsCard';

export const Bookings = () => {
  const [isLoading, handleIsLoading] = useApiLoader();
  const [data, setData] = useState<UserBookingType>([]);
  const [meta, setMeta] = useState({});
  const { name } = useParams();
  console.log(meta);
  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://v2.api.noroff.dev/holidaze/profiles/${name}/bookings?_bookings=true`,
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
          console.log(results.data);

          const parsedData = userBookingsSchema.safeParse(results.data);
          console.log(parsedData);
          if (!parsedData.success)
            console.error('Error while parsing data in Bookings component');

          setData(results.data);
          setMeta(results.meta);

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
    <section className="h-full w-full flex flex-col  items-center gap-10 py-2">
      <Link className="self-start" to={'/account'}>
        Go back
      </Link>
      <Helmet>
        <title>Holidaze | bookings</title>
      </Helmet>
      <h1 className="w-full text-left max-w-[50rem] m-auto">
        Upcoming bookings
      </h1>
      <section
        className={`max-w-[50rem]  w-full h-full flex justify-between  flex-wrap gap-4 `}
      >
        {data.map(({ id, created, dateFrom, dateTo, guests, updated }) => (
          <BookingsCard
            key={id}
            created={created}
            dateFrom={dateFrom}
            dateTo={dateTo}
            guests={guests}
            id={id}
            updated={updated}
          />
        ))}
      </section>
    </section>
  );
};
