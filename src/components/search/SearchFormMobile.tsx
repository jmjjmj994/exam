import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { XCircle } from 'phosphor-react';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { SearchLocation } from './search-inputs/SearchLocation';
import { useForm, UseFormRegister, FieldValues } from 'react-hook-form';
import { useSearchLocation } from './api/use-search-location.hook';
import { useFetchLocationStore } from 'src/state/apiStore';
export type SearchFieldValuesProps = {
  register: UseFormRegister<FieldValues>;
};

type SearchFormMobileProps = {
  active: boolean;
  onClick: () => void;
};
export const SearchFormMobile: React.FC<SearchFormMobileProps> = ({
  active,
  onClick,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();
  const { locationData, fetchDataLocation } = useFetchLocationStore();

  console.log(locationData, ' anything?');
  const onSubmit = (formData) => {
    fetchDataLocation(formData.location);
  };
  return createPortal(
    <motion.section
      initial={{ y: '-100%' }}
      transition={{
        ease: 'easeIn',
        duration: 0.1,
      }}
      animate={{ y: active ? '0%' : '-100%' }}
      className="fixed top-0 w-full right-0 bg-blue-500 h-[15rem]"
    >
      <button onClick={onClick}>
        {' '}
        <XCircle size={30} aria-label="close icon" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchLocation register={register} />
        <PrimaryButton type="submit" width="full">
          Search
        </PrimaryButton>
      </form>
    </motion.section>,
    document.getElementById('portal') as HTMLDivElement
  );
};
