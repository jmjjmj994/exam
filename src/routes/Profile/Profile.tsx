import { useFetchProfile } from 'src/api/fetch/use-fetch-profile';
import { ProfileCard } from './ProfileCard';
import { ProfileOptions } from './ProfileOptions';
import { Helmet } from 'react-helmet-async';
import { useBoolean } from 'src/hooks/use-boolean.hook';
import { ProfileForm } from './ProfileForm';
import { Spinner } from 'src/api/ui/Spinner';
export const Profile = () => {
  const username = JSON.parse(localStorage.getItem('user') || '').name;
  const [data, isLoading, error] = useFetchProfile(username);
  const [active, setFalse, setTrue] = useBoolean();
  const loading = <Spinner />;
  if (isLoading) {
    return loading;
  }

  return (
    <section className="h-full w-full flex flex-col items-center justify-center">
      <Helmet>
        <title>Holidaze | Profile</title>
      </Helmet>
      <h1 className="bg-orange-500">Profile</h1>

      <div className={`max-w-[50rem] flex flex-col gap-4`}>
        <ProfileCard
          active={active}
          name={data.name}
          email={data.email}
          avatar={data.avatar}
          venueManager={data.venueManager}
          _count={data._count}
        />
        <ProfileOptions venueManager={data.venueManager}/>
      </div>
    </section>
  );
};
