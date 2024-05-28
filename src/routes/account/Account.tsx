import { useFetchProfile } from 'src/api/fetch/use-fetch-profile';
import { AccountOptions } from './AccountOptions';
import { Helmet } from 'react-helmet-async';
import { Spinner } from 'src/api/ui/Spinner';
export const Account = () => {
  const username = JSON.parse(localStorage.getItem('user') || '').name;
  const [data, isLoading] = useFetchProfile(username);
  const loading = <Spinner />;
  if (isLoading) {
    return loading;
  }

  return (
    <section className="h-full w-full flex flex-col  items-center gap-10 py-2">
      <Helmet>
        <title>Holidaze | Account</title>
      </Helmet>
      <h1 className=" text-left max-w-[50rem] w-full ">Account</h1>

      <div className={`max-w-[50rem]`}>
        <AccountOptions name={data.name} venueManager={data.venueManager} />
      </div>
    </section>
  );
};
