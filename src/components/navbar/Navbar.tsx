import {  motion } from 'framer-motion';
import { useMediaMatch } from 'src/hooks/use-match-media.hook.tsx';
import { useKeyEscape } from 'src/hooks/use-key-escape.hook';
import { NavbarList } from './NavbarList';
import { NavbarButton } from './NavbarButton';
import { useEffect } from 'react';
type NavbarProps = {
  active: boolean;
  onClick: () => void;
};
export const Navbar: React.FC<NavbarProps> = ({ active, onClick }) => {
  const [isMobile] = useMediaMatch('768');
  useEffect(() => {
    if (!isMobile) {
      onClick();
    }
  }, [isMobile]);
  useKeyEscape(onClick);

  /* */
  return (
    <>
      {isMobile ? (
        <motion.nav
          initial={{ x: '100%' }}
          transition={{
            ease: 'linear',
            duration: 0.2,
          }}
          animate={{ x: active ? '0%' : '100%', opacity: active ? '1' : '0' }}
          className="  fixed right-0 top-0 w-full h-full z-[1] bg-custom-background_white"
        >
          <NavbarButton onClick={onClick} />
          <NavbarList />
        </motion.nav>
      ) : (
        <nav className=" w-full flex justify-center">
          <NavbarList />
        </nav>
      )}
    </>
  );
};
