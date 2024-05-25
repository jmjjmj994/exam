import { Navbar } from '../navbar/Navbar';
import { HamburgerButton } from './HamburgerButton';
import { User } from '../user/User';
import { useBoolean } from 'src/hooks/use-boolean.hook';

export const Header = () => {
  const [active, setFalse, setTrue] = useBoolean();
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
          <User />
          <HamburgerButton onClick={setTrue} />
        </div>
      </div>
    </header>
  );
};
