import { useFormStep, useFormData } from 'src/state/useStore';
import { IdentificationCard } from 'phosphor-react';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { options } from 'src/api/config/api-options';
export const CheckoutPayment = () => {
  const { formReady, resetFormReady, prevFormStep, nextFormStep, formStep } =
    useFormStep();
  const { bookingData } = useFormData();

  const bookVenue = (data: unknown) => {
    console.log(data);
    fetch('https://v2.api.noroff.dev/holidaze/bookings', {
      method: 'POST',
      headers: options.headers,
      body: options.body(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        refreshFormState();
        nextFormStep();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const refreshFormState = () => {
    resetFormReady();

    console.log(formReady, 'here');
  };
  console.log(formStep, formReady);

  return (
    <div className="max-w-[50rem] w-full  bg-custom-background_white shadow-overlay py-5 rounded-sm px-2 flex flex-col gap-4">
      <h1>Payment</h1>
      <div className="flex flex-col  items-between ">
        <label className="flex flex-col  rounded-md" htmlFor="cardholder-name">
          Cardholder name
          <input
            type="text"
            id="cardholder-name"
            className="border border-1 w-full rounded-md py-2 pl-1"
            defaultValue={'John Doe'}
            readOnly
          />
        </label>
        <label
          className="flex flex-col rounded-md  w-full "
          htmlFor="card-number"
        >
          Card number
          <input
            id="card-number"
            className="border border-1 rounded-md pl-1 py-2"
            type="text"
            defaultValue={'0000 0000 0000 0000'}
            readOnly
          />
        </label>

        <div className="flex gap-5">
          <label className="flex flex-col" htmlFor="expiry-date">
            Expiry date
            <input
              id="expiry-date"
              type="text"
              readOnly
              defaultValue={'09/27'}
              className="border border-1 rounded-md pl-1 py-2"
            />
          </label>

          <label className="flex flex-col" htmlFor="cvv">
            CVV
            <input
              id="cvv"
              type="password"
              readOnly
              defaultValue={'***'}
              className="border border-1 rounded-md pl-1 py-2"
            />
          </label>
        </div>
      </div>
      {/*   <button onClick={prevStep}>Go back</button>
      <button onClick={confirmFinish}>Confirm</button> */}

      <div className="flex gap-4">
        <button
          onClick={prevFormStep}
          type="button"
          className="border border-custom-primary inter-semi-bold  w-auto py-2 px-4 rounded-sm"
        >
          Go back
        </button>

        <PrimaryButton
          onClick={() => bookVenue(bookingData)}
          type="button"
          width="auto"
        >
          Confirm payment
        </PrimaryButton>
      </div>
    </div>
  );
};
