import { Helmet } from 'react-helmet-async';
import { CheckoutForm } from './CheckoutForm';
import { CheckoutPayment } from './CheckoutPayment';
import { useStep } from 'src/state/useStore';

export const Checkout = () => {
  const { step, finished } = useStep();
  console.log(step, finished);

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Helmet>
        <title>Holidaze | checkout</title>
      </Helmet>
      <h1 className="text-left">Checkout</h1>
      <div className=" w-full flex-col flex justify-center items-center gap-4">
        <div className="flex w-full max-w-[50rem]  items-center justify-between">
          <span
            className={`${
              step === 0 && 'bg-custom-primary text-white'
            } flex items-center justify-center w-[2.5rem] h-[2.5rem] border border-custom-primary rounded-full`}
          >
            1
          </span>
          <hr className="w-[85%]" />
          <span
            className={`${
              step === 1 && 'bg-custom-primary text-white'
            } flex items-center justify-center w-[2.5rem] h-[2.5rem] border border-custom-primary  rounded-full`}
          >
            2
          </span>
        </div>
        {step === 0 ? <CheckoutForm /> : <CheckoutPayment />}
      </div>
      {/*    <CheckoutForm /> */}
    </section>
  );
};
