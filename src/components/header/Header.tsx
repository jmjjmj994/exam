import { Navbar } from '../navbar/Navbar';
import { HamburgerButton } from './HamburgerButton';
import { User } from '../user/User';
import { UserModal } from '../user/UserModal';
import { useBoolean } from 'src/hooks/use-boolean.hook';
import { useToggler } from 'src/hooks/use-toggler.hook';
import { useForceRender } from 'src/hooks/use-force-render.hook';
import { SearchBar } from '../search/SearchBar';

export const Header = () => {
  const [active, setFalse, setTrue] = useBoolean();
  const [toggler, handleToggler, setTogglerFalse] = useToggler();
  const [forceRenderKey, handleForceRenderKey] = useForceRender();
  const isAtRoot: boolean = location.pathname === '/';

  return (
    <header
      className={`${
        isAtRoot ? 'header-l' : 'header-s'
      }  bg-custom-background_white`}
    >
      <div className="element-wrapper  flex flex-col justify-center gap-5 py-10">
        <div className="flex  items-center justify-between">
          <div className=" max-w-[5rem] w-full flex  items-center justify-start ">
            <img
              className=""
              src="/holidaze-logo.svg"
              alt="holidaze logo"
            />
          </div>
          <Navbar active={active} onClick={setFalse} />
          <div className="w-auto md:max-w-[5rem] md:w-full flex  gap-4 md:justify-end">
            <div className="relative flex items-center">
              <User onClick={handleToggler} />
              <UserModal
                handleForceRenderKey={handleForceRenderKey}
                forceRenderKey={forceRenderKey}
                toggler={toggler}
                onClick={{
                  handleToggler: handleToggler,
                  setTogglerFalse: setTogglerFalse,
                }}
              />
            </div>
            <HamburgerButton onClick={setTrue} />
          </div>
        </div>
        <SearchBar />
      </div>
    </header>
  );
};
