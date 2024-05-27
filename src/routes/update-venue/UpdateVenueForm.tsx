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
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'media',
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
    <form
      className="flex flex-col gap-4  w-full bg-custom-background_white shadow-overlay px-2 py-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Inputs
        type="text"
        id="name"
        name="name"
        required={false}
        optional={true}
        label="Update venue name"
        register={register}
      />

      <FormImages register={register} fields={fields} />
      <Guests register={register} />
      <Amenities register={register} />
      <button type="submit">submit</button>
    </form>
  );
};

const FormImages = ({ fields, register }: FieldValues) => (
  <div className="grid grid-cols-1 sm:grid-cols-2  gap-3">
    {fields.map((field, index) => (
      <div key={field.id} className="w-full gap-2">
        <label htmlFor={`media[${index}]`}>
          <p className="flex items-center gap-2">
            Image <span className="text-xs">(optional)</span>
          </p>
          <input
            className="inter-light py-2 rounded-sm border w-full pl-2"
            type="text"
            id={`media[${index}]`}
            {...register(`media.${index}.url` as const)}
            defaultValue={field.url}
          />
        </label>
      </div>
    ))}
  </div>
);

const Guests = ({ register }: FieldValues) => (
  <fieldset className="flex flex-col gap-2 inter-light py-2 border w-full pl-2 rounded-sm">
    <legend className="inter-semi-bold">
      <label htmlFor="guest1">
        <p className="flex items-center gap-2">
          Update guest count
          <span className="text-xs inter-light">(optional)</span>
        </p>
      </label>
    </legend>
    <div className="flex items-center gap-2">
      <input
        id="guest1"
        type="radio"
        value={1}
        defaultChecked
        {...register('maxGuests')}
      />
      <label htmlFor="guest1">1</label>
    </div>
    <div className="flex items-center gap-2">
      <input id="guest2" type="radio" value={2} {...register('maxGuests')} />
      <label htmlFor="guest2">2</label>
    </div>

    <div className="flex items-center gap-2">
      <input id="guest3" type="radio" value={3} {...register('maxGuests')} />
      <label htmlFor="guest3">3</label>
    </div>
    <div className="flex items-center gap-2">
      <input id="guest4" type="radio" value={4} {...register('maxGuests')} />
      <label htmlFor="guest4">4</label>
    </div>
  </fieldset>
);

const Amenities = ({ register }: FieldValues) => (
  <section className="inter-light py-4 rounded-sm border w-full pl-2 bg-custom-background_white ">
    <label className="flex items-center gap-2" htmlFor="wifi">
      <p className="inter-bold">Venue amenities</p>
      <span className="text-xs">(optional)</span>
    </label>

    <div className="inter-light py-2 rounded-sm  border-b-2 w-full pl-2 ">
      <input id="wifi" type="checkbox" {...register('meta.wifi')} />
      <label className="ml-2" htmlFor="wifi">
        Check this if the venue provides Wi-Fi access
      </label>
    </div>
    <div className="inter-light py-2 rounded-sm  border-b-2 w-full pl-2">
      <input id="parking" type="checkbox" {...register('meta.parking')} />
      <label className="ml-2" htmlFor="parking">
        Check this if the venue offers parking facilities
      </label>
    </div>
    <div className="inter-light py-2 rounded-sm  border-b-2 w-full pl-2">
      <input id="breakfast" type="checkbox" {...register('meta.breakfast')} />
      <label className="ml-2" htmlFor="breakfast">
        Check this if breakfast is provided by the venue
      </label>
    </div>
    <div className="inter-light py-2 rounded-sm  w-full pl-2">
      <input id="pets" type="checkbox" {...register('meta.pets')} />
      <label className="ml-2" htmlFor="pets">
        Check this if pets are allowed at the venue
      </label>
    </div>
  </section>
);
