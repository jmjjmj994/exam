import { SearchForm } from './SearchForm';
import { Faders } from 'phosphor-react';
export const SearchBar = () => {
  return (
    <div className="h-[2.5rem] flex gap-4 max-w-[40rem] w-full m-auto">
      <SearchForm />
    </div>
  );
};
