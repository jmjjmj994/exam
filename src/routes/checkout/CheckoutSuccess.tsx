import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { useFormStep } from 'src/state/useStore';
export const CheckoutSuccess = () => {
  const { resetFormStep } = useFormStep();

  const navigate = useNavigate();
  const redirectHome = () => {
    resetFormStep();
    navigate('/');
  };
  return (
    <div className="max-w-[50rem]  shadow-overlay bg-custom-background_white w-full rounded-sm pt-20 pb-10  flex items-center flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Booking Successful!</h1>
      <div className="inter-light">
        <p className="inter-bold">Next steps:</p>
        <ul className="text-left list-decimal ml-t">
          <li>Check your email for confirmation and details.</li>
          <li>Prepare for your upcoming experience.</li>
          <li>Feel free to contact us if you have any questions.</li>
        </ul>
      </div>
      <PrimaryButton onClick={redirectHome} type="button" width="auto">
        Go Back
      </PrimaryButton>
    </div>
  );
};
