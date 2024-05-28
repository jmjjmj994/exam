import { Controller, FieldValues } from 'react-hook-form';
import { AddressAutofill } from '@mapbox/search-js-react';

export const AddressAutofillWrapper = ({ control }: FieldValues) => {
  return (
    // @ts-expect-error error on autofill, reading their docs do yield a solution
    <AddressAutofill
      accessToken={
        'pk.eyJ1Ijoiam1qam1qOTk0IiwiYSI6ImNsdzNmMGswOTB3d2gyam11bXljbnZ6djAifQ.5NVq9fIs73cU6hSUdjU1bQ'
      }
    >
      <Controller
        control={control}
        name="location.address"
        render={({ field: { onChange } }) => (
          <input
            className="inter-light py-2 rounded-sm border w-full pl-2"
            type="text"
            id="address"
            onChange={onChange}
          />
        )}
      />
    </AddressAutofill>
  );
};
