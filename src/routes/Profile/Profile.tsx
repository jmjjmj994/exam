import { Helmet } from 'react-helmet-async';
import { ProfileUserCard } from './ProfileUserCard';
import { useFetchProfile } from 'src/api/fetch/use-fetch-profile';
import { Spinner } from 'src/api/ui/Spinner';
export const Profile = () => {
  const username = JSON.parse(localStorage.getItem('user') || '').name;
  const [data, isLoading] = useFetchProfile(username);
  const loading = <Spinner />;
  if (isLoading) {
    return loading;
  }
  return (
    <section className="h-full w-full flex flex-col  items-center gap-10">
      <Helmet>Holidaze | profile</Helmet>
      <h1 className="w-full text-left max-w-[50rem] m-auto">Profile</h1>
      <section className=" max-w-[50rem] w-full h-full">
        <div>
          <ProfileUserCard
            name={data.name}
            email={data.email}
            avatar={data.avatar}
            venueManager={data.venueManager}
            _count={data._count}
          />
        </div>
      </section>
    </section>
  );
};
