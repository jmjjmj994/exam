import { zodResolver } from '@hookform/resolvers/zod';
import { Inputs } from 'src/components/Inputs/Inputs';

import {
  useFieldArray,
  useForm,
  Controller,
  UseFormRegister,
  FieldValues,
  Field,
  UseFieldArrayRemove,
  SubmitHandler,
} from 'react-hook-form';
import { useParams } from 'react-router-dom';


type UpdateVenueFormProps = {
  name: string;
  media: {
    url: string;
    alt: string;
  }[];
  wifi: boolean;
  pets: boolean;
  breakfast: boolean;
  parking: boolean;
  description: string;
  maxGuests: number;
};

export const UpdateVenueForm: React.FC<UpdateVenueFormProps> = ({
  name,
  media,
  wifi,
  pets,
  breakfast,
  parking,
  description,
  maxGuests,
}) => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      media: media,
      name: name,
      meta: {
        wifi: wifi,
        parking: parking,
        breakfast: breakfast,
        pets: pets,
      },
      description: description,
      maxGuests: maxGuests,
    },
  });

  useForm({
    defaultValues: async () =>
      fetch(
        `https://v2.api.noroff.dev/holidaze/venues/${id}?_owner=true&_bookings=true`
      ),
  });
  /* console.log(data) */
  const onSubmit = (dataT) => {
    console.log(dataT);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      form
      <button type="submit">submit</button>
    </form>
  );
};
