import { ProfileForm } from './ProfileForm';

type ProfileCardProps = {
  name: string;
  email: string;
  avatar: {
    url: string;
    alt: string;
  };
  venueManager: boolean;
  _count: {
    venues: number;
    bookings: number;
  };
};

export const ProfileUserCard: React.FC<ProfileCardProps> = ({
  name,
  avatar: { url, alt },
  venueManager,
}) => {
  return (
    <section className="flex bg-custom-background_white border rounded-md shadow-overlay px-4 py-4">
      <article
        className={`  w-full flex flex-col gap-4  rounded-sm items-start`}
      >
        <div className="flex flex-col">
          <img
            className="w-[100px] h-[100px] object-cover aspect-auto rounded-full"
            src={url}
            alt={alt}
          />
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          {venueManager ? (
            <div className="flex items-center inter-light gap-4 text-system-special-primary border px-1 py-1 bg-system-special-fill rounded-md">
              <span className="text-sm">Venue manager</span>
            </div>
          ) : (
            <div className="flex items-center inter-light gap-4 text-system-special-primary border px-1 py-1 bg-system-special-fill rounded-md">
              <span className="text-sm">Regular user</span>
            </div>
          )}
        </div>
      </article>

      <ProfileForm
        url={url}
        alt={alt}
        venueManager={venueManager}
        name={name}
      />
    </section>
  );
};
