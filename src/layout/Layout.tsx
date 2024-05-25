import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from 'src/components/header/Header';
import { Footer } from 'src/components/footer/Footer';
export const Layout = () => {
  const isAtRoot: boolean = location.pathname === '/';
  return (
    <HelmetProvider>
      <Header />
      <main
        className={`${isAtRoot ? 'main-l' : 'main-s'} bg-custom-background`}
      >
        <div className="element-wrapper">
          <Outlet />
        </div>
      </main>
      <Footer />
    </HelmetProvider>
  );
};
