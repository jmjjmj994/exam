import { MagnifyingGlass } from 'phosphor-react';
import { useForm,  FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecursiveDataFetcher } from 'src/state/apiStore';
export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    reset,
   
  } = useForm<FieldValues>();
  const navigate = useNavigate();
  const { setStateQuery } = useRecursiveDataFetcher();
  const onSubmit = (data: FieldValues) => {
    const queryString = new URLSearchParams(data).toString();
    navigate(`/search?${queryString}`);
    setStateQuery(`/search?${queryString}`);
    reset();
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
          {...register('location')}
        />
      </div>
    </form>
  );
};
