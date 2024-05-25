import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from 'src/components/header/Header';
import { Footer } from 'src/components/footer/Footer';
export const Layout = () => {
  return (
    <HelmetProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  );
};
