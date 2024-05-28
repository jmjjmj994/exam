import { MagnifyingGlass } from 'phosphor-react';
import { Inputs } from '../Inputs/Inputs';
import { useForm, UseFormRegister, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit = (formData) => {
    /*   const queryString = new URLSearchParams(formData).toString()
    console.log(queryString)
    navigate(`/search?${queryString}`)
    console.log('clicked') */
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full bg-custom-background_white"
    >
      <div className="h-full w-full flex">
        <label
          className="left-5 flex items-center gap-4  px-4 cursor-pointer"
          htmlFor="search"
        >
          <MagnifyingGlass size={24} />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="inter-light py-2 rounded-sm border-r border-t border-b w-full pl-2"
        />
      </div>
    </form>
  );
};
