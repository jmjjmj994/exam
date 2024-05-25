import { Helmet } from 'react-helmet-async';
import { Venues } from './venues/Venues';
export const App = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Venues />
    </div>
  );
};
