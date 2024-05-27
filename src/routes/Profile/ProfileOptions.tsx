import { Link } from 'react-router-dom';
import { Lock } from 'phosphor-react';
import {
  userActionsCard,
  venueManagerActionsCard,
  venueManagerLockedCard,
} from './userActions';

type ProfileOptionsProp = { venueManager: boolean };
type VenueManagerActionsProp = { venueManager: boolean };
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
}) => {
  const lockedVenueManagerContent = (
    <article className="flex flex-col gap-2 px-3 py-8 rounded-sm bg-custom-background_white shadow-overlay hover:bg-gray-100 transition-colors">
      {venueManagerLockedCard.icon}
      <p>{venueManagerLockedCard.title}</p>
      <p>{venueManagerLockedCard.content}</p>
    </article>
  );

  const availableVenueManagerContent = (
    <>
      {venueManagerActionsCard.map(({ id, path, icon, title, content }) => (
        <Link className="relative" key={id} to={path}>
          <article className="flex flex-col gap-2 px-3 py-8 rounded-sm bg-custom-background_white shadow-overlay hover:bg-gray-100 transition-colors">
            {icon}
            <p>{title}</p>
            <p>{content}</p>
          </article>
        </Link>
      ))}
    </>
  );

  return (
    <>
      {venueManager ? availableVenueManagerContent : lockedVenueManagerContent}
    </>
  );
};

export const ProfileOptions: React.FC<ProfileOptionsProp> = ({
  venueManager,
}) => {
  return (
    <section className=" flex flex-wrap gap-4 ">
      <RegisteredUserActions />
      <VenueManagerActions venueManager={venueManager} />
    </section>
  );
};
