import { Helmet } from 'react-helmet-async';
import { CheckoutForm } from './CheckoutForm';
import { CheckoutPayment } from './CheckoutPayment';
import { CheckoutSuccess } from './CheckoutSuccess';
import { useFormStep } from 'src/state/useStore';

const CheckoutStepIndication = () => {
  const { formStep } = useFormStep();

  switch (formStep) {
    case 0:
      return <p>hei 0</p>;
    case 1:
      return <p>hei1</p>;
    case 2:
      return null;
  }
};

export const Checkout = () => {
  const { formStep } = useFormStep();

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Helmet>
        <title>Holidaze | checkout</title>
      </Helmet>
      {formStep === 2 ? '' : <h1 className="text-left">Checkout</h1>}
      <div className=" w-full flex-col flex justify-center items-center gap-4">
        {formStep === 2 && <CheckoutSuccess />}
        <div className="flex w-full max-w-[50rem]  items-center justify-between">
          <span
            className={`${
              formStep === 0 && 'bg-custom-primary text-white'
            } flex items-center justify-center w-[2.5rem] h-[2.5rem] border border-custom-primary rounded-full`}
          >
            1
          </span>
          <hr className="w-[85%]" />
          <span
            className={`${
              formStep === 1 && 'bg-custom-primary text-white'
            } flex items-center justify-center w-[2.5rem] h-[2.5rem] border border-custom-primary  rounded-full`}
          >
            2
          </span>
        </div>
        {formStep === 0 ? <CheckoutForm /> : <CheckoutPayment />}
      </div>
      {/*    <CheckoutForm /> */}
    </section>
  );
};
