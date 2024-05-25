import '../auth.css';
import { RegisterForm } from './RegisterForm';
import { Helmet } from 'react-helmet-async';
export const Register = () => (
  <section className="auth-wrapper">
    <Helmet>
      <title>Holidaze | Register</title>
    </Helmet>
    <RegisterForm />
  </section>
);
