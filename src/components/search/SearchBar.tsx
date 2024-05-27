import { SearchBarButton } from './SearchBarButton';
import { useBoolean } from 'src/hooks/use-boolean.hook';
import { SearchFormMobile } from './SearchFormMobile';
import { useMediaMatch } from 'src/hooks/use-match-media.hook.tsx';
import { useEffect } from 'react';

export const SearchBar = () => {
  const [active, setFalse, setTrue] = useBoolean();
  const [isMobile] = useMediaMatch('768');
  useEffect(() => {
    setFalse();
  }, [isMobile]);

  console.log(active, setFalse);
  return (
    <div className="h-[2.5rem]">
      <SearchBarButton onClick={setTrue} />
      <SearchFormMobile active={active} onClick={setFalse} />
    </div>
  );
};
