import { MagnifyingGlass } from 'phosphor-react';
type SearchBarButtonProps = {
  onClick: () => void;
};
export const SearchBarButton: React.FC<SearchBarButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-full inter-light py-2 rounded-sm border bg-custom-background_white flex items-center gap-2 pl-2 rounded-sm"
    >
      <MagnifyingGlass />
      Search
    </button>
  );
};
