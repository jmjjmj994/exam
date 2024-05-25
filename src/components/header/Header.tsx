import { Navbar } from '../navbar/Navbar';
import { Hamburger } from '../navbar/Hamburger';
export const Header = () => (
  <header className="header header-l bg-custom-background_white">
    <div className="element-wrapper flex  items-center justify-between ">
      <div className="h-[5rem] max-w-[8rem] w-full flex  items-center justify-star">
        <img
          className="max-w-full h-full"
          src="public/holidaze-logo.svg"
          alt="holidaze logo"
        />
      </div>
      <Hamburger />
      {/*     <Navbar /> */}
    </div>
  </header>
);
