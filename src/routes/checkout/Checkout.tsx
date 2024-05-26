import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { CheckoutForm } from './CheckoutForm';
export const Checkout = () => {
  const { id, dateFrom, dateTo, guests, price, name, image } = useParams();
  console.log(id, dateFrom, dateTo, guests, price, name, image);
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Helmet>
        <title>Holidaze | checkout</title>
      </Helmet>
      <h1>Checkout</h1>
      <CheckoutForm />
    </section>
  );
};
