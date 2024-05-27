import { useFetchProfile } from 'src/api/fetch/use-fetch-profile';
import { ProfileCard } from './ProfileCard';
import { ProfileOptions } from './ProfileOptions';
import { Helmet } from 'react-helmet-async';
export const Profile = () => {
  const username = JSON.parse(localStorage.getItem('user') || '').name;
  const [data, isLoading, error] = useFetchProfile(username);

  return (
    <section className="h-full w-full flex flex-col items-center justify-center">
      <Helmet>
        <title>Holidaze | Profile</title>
      </Helmet>
      <h1 className="bg-orange-500">Profile</h1>
      <div className="max-w-[50rem]">
        <ProfileCard
          name={data.name}
          email={data.email}
          avatar={data.avatar}
          venueManager={data.venueManager}
          _count={data._count}
        />
        <ProfileOptions />
      </div>
    </section>
  );
};
