import { MagnifyingGlass } from 'phosphor-react';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecursiveDataFetcher } from 'src/state/apiStore';
export const SearchForm = () => {
  const { register, handleSubmit, reset } = useForm<FieldValues>();
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
      <div className="h-full w-full flex gap-2">
        <label
          className="left-5 flex items-center gap-4  rounded-md px-4 cursor-pointer border hover:bg-slate-50 transition-colors"
          htmlFor="search"
        >
          <MagnifyingGlass size={24} />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="inter-light py-2 rounded-sm border w-full pl-2 hover:bg-slate-50 transition-colors"
          {...register('location')}
        />
      </div>
    </form>
  );
};
