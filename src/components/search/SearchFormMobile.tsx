import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { XCircle } from 'phosphor-react';
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
  } = useForm();
  console.log(active, onClick);
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
      <form action=""></form>
    </motion.section>,
    document.getElementById('portal') as HTMLDivElement
  );
};
