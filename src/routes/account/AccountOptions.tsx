import { Link } from 'react-router-dom';
import { Lock, Calendar, User } from 'phosphor-react';
import { manageVenuesCard } from './accountActions';
type AccountOptionProps = { venueManager: boolean; name: string };
type VenueManagerActionsProp = { venueManager: boolean; name: string };

const VenueManagerActions: React.FC<VenueManagerActionsProp> = ({
  venueManager,
  name,
}) => {
  return (
    <Link
      className={`${
        venueManager ? 'pointer-events-auto' : 'pointer-events-none'
      } relative`}
      to={`${venueManager ? `/manage-venues/${name}` : ''}`}
    >
      {!venueManager && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-1 pointer-events-auto">
          <Lock className="text-gray-500" size={80} />
        </div>
      )}
      <article className="flex flex-col justify-between gap-2 px-3 py-5 h-[10rem] rounded-md border bg-custom-background_white shadow-overlay hover:bg-gray-100 transition-colors col-3">
        {manageVenuesCard.icon}
        <div>
          <p>{manageVenuesCard.title}</p>
          <p>{manageVenuesCard.content}</p>
        </div>
      </article>
    </Link>
  );
};

export const AccountOptions: React.FC<AccountOptionProps> = ({
  venueManager,
  name,
}) => {
  return (
    <section className="flex flex-wrap gap-[20px]">
      <Link to={'/profile'}>
        <article
          className={`flex flex-col justify-between gap-2 px-3 py-5 h-[10rem] rounded-md border  bg-custom-background_white shadow-overlay hover:bg-gray-100 transition-colors `}
        >
          <User size={25} />
          <div>
            <p>Profile</p>
            <p>View and manage your profile details</p>
          </div>
        </article>
      </Link>

      <Link to={`/manage-bookings/${name}`}>
        <article
          className={`flex flex-col justify-between gap-2 px-3 py-5 h-[10rem] rounded-md border  bg-custom-background_white shadow-overlay hover:bg-gray-100 transition-colors `}
        >
          <Calendar size={25} />
          <div>
            <p>View upcoming bookings</p>
            <p>View and manage your upcoming bookings</p>
          </div>
        </article>
      </Link>
      <VenueManagerActions venueManager={venueManager} name={name} />
    </section>
  );
};
