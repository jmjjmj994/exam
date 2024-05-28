import { Inputs } from 'src/components/Inputs/Inputs';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { useFieldArray, useForm, FieldValues } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { options } from 'src/api/config/api-options';

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
  price: number;
};

export const UpdateVenueForm: React.FC<UpdateVenueFormProps> = ({
  name,
  price,
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
    formState: { isDirty },
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
      price: price,
    },
  });
  const { fields } = useFieldArray({
    control,
    name: 'media',
  });

  const onSubmit = async (data: FieldValues) => {
    if (!isDirty) {
      console.log('Form is not dirty, no need to submit');
      return;
    }
    const submitData: FieldValues = {
      ...data,
      maxGuests: Number(data.maxGuests),
    };

    fetch(` https://v2.api.noroff.dev/holidaze/venues/${id}`, {
      method: 'PUT',
      headers: options.headers,
      body: JSON.stringify(submitData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `${response.statusText} error in UpdateVenueForm component`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data, 'Success creating venue');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="flex flex-col gap-4  static lg:max-w-[50rem] lg:self-start lg:sticky top-0 w-full bg-custom-background_white shadow-overlay px-2 py-2"
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

      <label className="inter-bold" htmlFor="price">
        <p>
          Price for the venue{' '}
          <span className="inter-light text-xs">(optional)</span>
        </p>
        <input
          className="inter-light py-2 rounded-sm border w-full pl-2"
          id="price"
          type="number"
          min={100}
          max={8000}
          step="100"
          {...register('price', { valueAsNumber: true })}
        />
      </label>
      <Amenities register={register} />
      <label className="inter-light" htmlFor="bio">
        <p className="flex items-center gap-2 inter-bold">
          Update description
          <span className="text-xs inter-light">(optional)</span>
        </p>
        <textarea
          className=" min-h-[25vh]  py-2 rounded-sm border w-full pl-2"
          id="description"
          {...register('description')}
        ></textarea>
      </label>

      <PrimaryButton type="submit" width="full">
        Update venue
      </PrimaryButton>
    </form>
  );
};

const FormImages = ({ fields, register }: FieldValues) => (
  <div className="grid grid-cols-1 sm:grid-cols-2  gap-3">
    {fields.map((field: FieldValues, index: number) => (
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
