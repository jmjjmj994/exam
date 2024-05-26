import { useFetchProfile } from 'src/api/fetch/use-fetch-profile';

export const Profile = () => {
  const username = JSON.parse(localStorage.getItem('user') || '').name;
  const [data, isLoading, error] = useFetchProfile(username);
  console.log(data)
  console.log(username);
  return <div>profile</div>;
};
