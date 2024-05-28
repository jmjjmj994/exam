import { Link } from 'react-router-dom';
import { Lock } from 'phosphor-react';
import { userActionsCard, manageVenuesCard } from './accountActions';
type AccountOptionProps = { venueManager: boolean; name: string };
type VenueManagerActionsProp = { venueManager: boolean; name: string };
const RegisteredUserActions = () => {
  return (
    <>
      {userActionsCard.map(({ id, path, icon, title, content }) => (
        <Link key={id} to={path}>
          <article
            className={`flex flex-col justify-between gap-2 px-3 py-5 h-[10rem] rounded-md border  bg-custom-background_white shadow-overlay hover:bg-gray-100 transition-colors `}
          >
            {icon}
            <div>
              <p>{title}</p>
              <p>{content}</p>
            </div>
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
      <RegisteredUserActions />
      <VenueManagerActions venueManager={venueManager} name={name} />
    </section>
  );
};
