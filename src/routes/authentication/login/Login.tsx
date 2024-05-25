import { Helmet } from 'react-helmet-async';
import { LoginForm } from './LoginForm';
export const Login = () => (
  <section className="auth-wrapper">
    <Helmet>
      <title>Holidaze | sign-in</title>
    </Helmet>
    <LoginForm />
  </section>
);
