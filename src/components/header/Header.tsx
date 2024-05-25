import { Navbar } from '../navbar/Navbar';
import { HamburgerButton } from './HamburgerButton';
import { User } from '../user/User';
import { UserModal } from '../user/UserModal';
import { useBoolean } from 'src/hooks/use-boolean.hook';
import { useToggler } from 'src/hooks/use-toggler.hook';
import { useForceRender } from 'src/hooks/use-force-render.hook';
console.log('header');
export const Header = () => {
  const [active, setFalse, setTrue] = useBoolean();
  const [toggler, handleToggler, setTogglerFalse] = useToggler();
  const [forceRenderKey, handleForceRenderKey] = useForceRender();
  return (
    <header className="header header-l bg-custom-background_white">
      <div className="element-wrapper flex  items-center justify-between  ">
        <div className=" max-w-[8rem] w-full flex  items-center justify-start">
          <img
            className=""
            src="public/holidaze-logo.svg"
            alt="holidaze logo"
          />
        </div>

        <Navbar active={active} onClick={setFalse} />

        <div className="w-auto md:max-w-[8rem] md:w-full flex  gap-4 md:justify-end">
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
    </header>
  );
};
