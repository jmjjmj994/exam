import { CreateVenueForm } from './CreateVenueForm';
import { Link } from 'react-router-dom';
export const CreateVenue = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Link to={'/account'} className="self-start">
        Go back
      </Link>
      <div className="max-w-[50rem] w-full">
        <CreateVenueForm />
      </div>
    </div>
  );
};
