type ProfileCardProps = {
  active: boolean;
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
import { ProfileForm } from './ProfileForm';

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  email,
  avatar: { url, alt },
  venueManager,
  _count,
}) => {
  return (
    <section className="flex flex-col md:flex-row gap-2">
      <article
        className={` md:max-w-[20rem] w-full flex flex-col gap-4 px-2 py-2 rounded-sm  bg-custom-background_white shadow-overlay`}
      >
        <div className="flex justify-between">
          <img
            className="w-[100px] h-[100px] object-cover aspect-auto rounded-full"
            src={url}
            alt={alt}
          />
          <p>{name}</p>
        </div>
        <div>
          <p>Email address</p>
          <p>{email}</p>
        </div>

        <div>
          <p>Role</p>
          {venueManager ? <p>Venue manager</p> : <p>User</p>}
        </div>

        <div>
          Statistics
          <p>Bookings: {_count.bookings}</p>
          <p>Venues: {_count.venues}</p>
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
