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
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Plus } from 'phosphor-react';
import { Inputs } from 'src/components/Inputs/Inputs';
import { createVenueSchema } from './create-venue-schema';

/* */
import { AddressAutofill } from '@mapbox/search-js-react';
import { options } from 'src/api/config/api-options';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { create } from 'zustand';

/* */

export type FormValues = {
  name?: string;
  description?: string;
  media?: {
    url: string | undefined;
    alt: string;
  }[];
  price?: number;
  maxGuests?: number;
  meta?: {
    wifi: boolean;
    parking: boolean;
    breakfast: boolean;
    pets: boolean;
  };
  location?: {
    address: string;
    city: string;
    country: string;
  };
  register: UseFormRegister<FieldValues>;
};

export const CreateVenueForm = () => {
  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(createVenueSchema),
    defaultValues: {
      media: [{ url: '', alt: 'image of venue' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'media',
  });

  const onSubmit = async (data: unknown) => {
    console.log(data);
    fetch('https://v2.api.noroff.dev/holidaze/venues/', {
      method: 'POST',
      headers: options.headers,
      body: options.body(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.statusText} error in createVenueForm`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      className="w-full flex flex-col gap-8 pb-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="pt-20">Create a venue</h1>
      <Inputs
        type="text"
        id="name"
        label="Enter a name for your venue"
        name={'name'}
        register={register}
        optional={false}
        required={true}
      />

      <FormImages
        register={register}
        fields={fields}
        append={append}
        remove={remove}
      />

      <Guests register={register} />
      <Location register={register} control={control} />
      <Amenities register={register} />

      <label className="inter-bold" htmlFor="price">
        <p>
          Price for the venue{' '}
          <span className="inter-light text-xs">(required)</span>
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

      <label className="inter-light" htmlFor="bio">
        <p className="flex items-center gap-2 inter-bold">
          Enter description
          <span className="text-xs inter-light">(required)</span>
        </p>
        <textarea
          className=" min-h-[25vh]  py-2 rounded-sm border w-full pl-2"
          id="description"
          {...register('description')}
        ></textarea>
      </label>
      <PrimaryButton type="submit" width="full">
        Create venue
      </PrimaryButton>
    </form>
  );
};

const FormImages = ({ fields, register, append, remove }: FieldValues) => (
  <div>
    <label className="flex items-center gap-2" htmlFor="media">
      Add an image for your venue
      <span className="text-xs">(required) </span>
    </label>

    <div className="flex flex-col gap-2">
      {fields.map((field, index) => (
        <div key={field.id} className=" flex gap-2">
          <input
            className="inter-light py-2 rounded-sm border w-full pl-2"
            type="text"
            id="media"
            {...register(`media.${index}.url` as const)}
            defaultValue={field.url}
          />
          {index !== 0 && (
            <button className="right-0" onClick={() => remove(index)}>
              <X size={20} />
            </button>
          )}
        </div>
      ))}

      {fields.length < 4 && (
        <button
          className="w-auto self-start"
          onClick={() => append({ url: '', alt: 'image of venue' })}
        >
          <Plus />
        </button>
      )}
    </div>
  </div>
);

const Guests = ({ register }: FieldValues) => (
  <fieldset className="inter-light py-2 rounded-sm border w-full pl-2">
    <legend className="inter-bold">How many guests are allowed</legend>
    <div>
      <input
        id="guest1"
        type="radio"
        value={1}
        defaultChecked
        {...register('maxGuests')}
      />
      <label htmlFor="guest1">1</label>
    </div>
    <div>
      <input id="guest2" type="radio" value={2} {...register('maxGuests')} />
      <label htmlFor="guest2">2</label>
    </div>

    <div>
      <input id="guest3" type="radio" value={3} {...register('maxGuests')} />
      <label htmlFor="guest3">3</label>
    </div>
    <div>
      <input id="guest4" type="radio" value={4} {...register('maxGuests')} />
      <label htmlFor="guest4">4</label>
    </div>
  </fieldset>
);

const Amenities = ({ register }: FieldValues) => (
  <section className="inter-light py-4 rounded-sm border w-full pl-2 bg-custom-background_white ">
    <div className="flex items-center gap-2 ">
      <p className="inter-bold">Venue amenities</p>
      <span className="text-xs">(optional)</span>
    </div>

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

const Location = ({ register, control }: FieldValues) => {
  return (
    <section className="flex gap-2 ">
      <div>
        <label className="flex items-center gap-2" htmlFor="address">
          Address
          <span className="text-xs">(required)</span>
        </label>

        <AddressAutofill
          accessToken={
            'pk.eyJ1Ijoiam1qam1qOTk0IiwiYSI6ImNsdzNmMGswOTB3d2gyam11bXljbnZ6djAifQ.5NVq9fIs73cU6hSUdjU1bQ'
          }
        >
          <Controller
            control={control}
            name="location.address"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <input
                className="inter-light py-2 rounded-sm border w-full pl-2"
                type="text"
                id="address"
                onChange={onChange}
              />
            )}
          ></Controller>
        </AddressAutofill>
      </div>
      <Inputs
        type="text"
        id="city"
        register={register}
        name={'location.city'}
        label="City"
        required={true}
        optional={false}
      />

      <Inputs
        type="text"
        id="Country"
        register={register}
        name={'location.country'}
        label="Country"
        required={true}
        optional={false}
      />
    </section>
  );
};
