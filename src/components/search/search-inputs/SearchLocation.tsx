import { Inputs } from 'src/components/Inputs/Inputs';
import { SearchFieldValuesProps } from '../SearchFormMobile';
import React from 'react';
export const SearchLocation: React.FC<SearchFieldValuesProps> = ({
  register,
}) => {
  return (
    <Inputs
      type="text"
      name="location"
      id="location"
      label="Search by location"
      optional={false}
      required={false}
      register={register}
    />
  );
};
