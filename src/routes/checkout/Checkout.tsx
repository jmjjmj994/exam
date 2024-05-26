import { Helmet } from 'react-helmet-async';
import { CheckoutForm } from './CheckoutForm';
import { CheckoutPayment } from './CheckoutPayment';
import { CheckoutSuccess } from './CheckoutSuccess';
import { useFormStep } from 'src/state/useStore';

const CheckoutStepIndicator = () => {
  const { formStep } = useFormStep();
  switch (formStep) {
    case 0:
      return (
        <div className="flex w-full max-w-[50rem] items-center justify-between">
          <span
            className={`bg-custom-primary text-white flex items-center justify-center w-[2.5rem] h-[2.5rem] border border-custom-primary rounded-full`}
          >
            1
          </span>
          <span
            className={`flex items-center justify-center w-[2.5rem] h-[2.5rem] border border-custom-primary rounded-full`}
          >
            2
          </span>
        </div>
      );
    case 1:
      return (
        <div className="flex w-full max-w-[50rem] items-center justify-between">
          <span
            className={`flex items-center justify-center w-[2.5rem] h-[2.5rem] border border-custom-primary rounded-full`}
          >
            1
          </span>
          <span
            className={`bg-custom-primary text-white flex items-center justify-center w-[2.5rem] h-[2.5rem] border border-custom-primary rounded-full`}
          >
            2
          </span>
        </div>
      );
    default:
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
      <h1 className="text-left bg-orange-500">Checkout</h1>
      <div className=" w-full flex-col flex justify-center items-center gap-4">
        <CheckoutStepIndicator />
        {formStep === 0 && <CheckoutForm />}
        {formStep === 1 && <CheckoutPayment />}
        {formStep === 2 && <CheckoutSuccess />}
      </div>
    </section>
  );
};
