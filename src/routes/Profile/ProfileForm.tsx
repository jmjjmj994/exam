import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { options } from 'src/api/config/api-options';
import { Inputs } from 'src/components/Inputs/Inputs';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { profileUpdateSchema } from './profile-update-schema';

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
  console.log(url, 'in form');

  const onSubmit = (data: unknown) => {
    console.log(isDirty);
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
        return response.json();
      })
      .then((data) => {
        console.log('Success changing avatar');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      className="w-full self-start bg-orange-500"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Inputs
        type="text"
        label="Update avatar"
        name="avatar.url"
        id="avatar.url"
        required={false}
        optional={true}
        register={register}
      />

      <label htmlFor="venueManager">
        {venueManager
          ? 'This account is a venue manager and has access to venue management features. If you wish to change this click here'
          : 'This account is not a venue manager and does not have access to venue management features.'}{' '}
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
  );
};
