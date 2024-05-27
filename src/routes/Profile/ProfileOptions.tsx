import { Link } from 'react-router-dom';
import { Lock } from 'phosphor-react';

import { userActionsCard, manageVenuesCard } from './userActions';

type ProfileOptionsProp = { venueManager: boolean; name: string };
type VenueManagerActionsProp = { venueManager: boolean; name: string };
const RegisteredUserActions = () => {
  return (
    <>
      {userActionsCard.map(({ id, path, icon, title, content }) => (
        <Link key={id} to={path}>
          <article className="flex flex-col gap-2 px-3 py-8 rounded-sm bg-custom-background_white shadow-overlay hover:bg-gray-100 transition-colors">
            {icon}
            <p>{title}</p>
            <p>{content}</p>
          </article>
        </Link>
      ))}
    </>
  );
};

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
      <article className="flex flex-col gap-2 px-3 py-8 rounded-sm bg-custom-background_white shadow-overlay hover:bg-gray-100 transition-colors">
        {manageVenuesCard.icon}
        <p>{manageVenuesCard.title}</p>
        <p>{manageVenuesCard.content}</p>
      </article>
    </Link>
  );
};

export const ProfileOptions: React.FC<ProfileOptionsProp> = ({
  venueManager,
  name,
}) => {
  return (
    <section className=" flex flex-wrap gap-4 ">
      <RegisteredUserActions />
      <VenueManagerActions venueManager={venueManager} name={name} />
    </section>
  );
};
