import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { options } from 'src/api/config/api-options';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { profileUpdateSchema } from './profile-update-schema';
import { errorToast } from 'src/components/toast-notification/toast';
import { ToasterProvider } from 'src/components/toast-notification/Toaster';
type ProfileFormProps = {
  url: string;
  alt: string;
  venueManager: boolean;
  name: string;
};

export const ProfileForm: React.FC<ProfileFormProps> = ({
  url,
  alt,
  venueManager,
  name,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      avatar: {
        url: url,
        alt: alt,
      },
      venueManager: venueManager,
    },
    resolver: zodResolver(profileUpdateSchema),
  });

  const onSubmit = (data: unknown) => {
    if (!isDirty) {
      console.log('Form is not dirty, no need to submit');
      return;
    }

    fetch(`https://v2.api.noroff.dev/holidaze/profiles/${name}`, {
      method: 'PUT',
      headers: options.headers,
      body: options.body(data),
    })
      .then((response) => {
        if (isDirty) return;
        if (!response.ok) {
          throw new Error(`${response.statusText}: Error updating profile`);
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        errorToast('We could not change your profile details', 'bottom-right');
      });
  };

  return (
    <>
      <ToasterProvider />
      <form
        className="w-full flex flex-col gap-4  bg-custom-background_white  rounded-sm shadow-overlay"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="avatar.url">
          Change avatar
          <input
            className="border w-full rounded-md text-md py-1 pl-1"
            type="text"
            id="avatar.url"
            {...register('avatar.url')}
          />
        </label>
        <label htmlFor="venueManager">
          {venueManager ? (
            <p className="text-sm inter-semi-bold inline">
              This account is a venue manager and has access to venue management
              features. If you wish to change this click here
            </p>
          ) : (
            <p className='className="text-sm inter-semi-bold inline"'>
              This account is not a venue manager and does not have access to
              venue management features.
            </p>
          )}{' '}
          <input
            type="checkbox"
            defaultChecked={venueManager}
            id="venueManager"
            {...register('venueManager')}
          />
        </label>
        <PrimaryButton type="submit" width="full">
          Confirm
        </PrimaryButton>
      </form>
    </>
  );
};
