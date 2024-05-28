import { MapPin, Star, Globe } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import { formatISO } from 'date-fns';
import { useFormStep, useFormData } from 'src/state/useStore';
export const CheckoutForm = () => {
  const {
    venueId,
    dateStart,
    dateEnd,
    visitors,
    image,
    name,
    city,
    country,
    address,
  } = useParams();
  const { nextFormStep } = useFormStep();
  const { bookingData, storeBookingData } = useFormData();
  const dateFrom = dateStart ? new Date(dateStart) : new Date();
  const dateTo = dateEnd ? new Date(dateEnd) : new Date();
  const checkInFormatted = formatISO(new Date(dateFrom), {
    representation: 'date',
  });

  const checkOutFormatted = formatISO(new Date(dateTo), {
    representation: 'date',
  });
  const guests = Number(visitors);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleStoreData = () => {
    storeBookingData({
      dateFrom,
      dateTo,
      guests,
      venueId: venueId ?? '',
    });
  };

  return (
    <section className="flex max-w-[70rem] bg-custom-background_white shadow-overlay  w-full rounded-md py-4 px-4">
      <form onSubmit={onSubmit} className="   w-[50%]  ">
        <fieldset className="flex flex-col  h-full">
          <h1>ORDER SUMMARY</h1>
          <label className="flex   w-full flex-col" htmlFor="check-in">
            <p>Check in</p>
            <input
              className="inter-light py-1 rounded-sm border w-full text-center"
              type="text"
              defaultValue={checkInFormatted}
              readOnly={true}
            />
          </label>

          <label className="flex flex-col" htmlFor="check-out">
            Check out
            <input
              className="inter-light py-2 rounded-sm border w-full pl-2"
              type="text"
              defaultValue={checkOutFormatted}
            />
          </label>
          {/*        </div> */}

          <div className="max-w-[50%]">
            <p>location</p>

            <div className="w-full flex flex-wrap gap-4">
              <div className="flex flex-col items-center bg-gray-100 max-w-[5rem] rounded-md text-md inter-light py-2 rounded-sm border w-full pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM168,96h48V208H168Zm-16,48v64H104V144ZM40,48H88V208H40ZM72,72V88a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm48,16V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm64,0V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm0-48V120a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Z"></path>
                </svg>
                <p> {city}</p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 max-w-[5rem] rounded-md text-md inter-light py-2 rounded-sm border w-full pl-2">
                <MapPin size={20} />
                <p> {address}</p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 max-w-[5rem] rounded-md text-md inter-light py-2 rounded-sm border w-full pl-2">
                <Globe size={20} />
                <p> {country}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              handleStoreData();
              nextFormStep();
            }}
            className="bg-purple-500 inter-light py-2 rounded-sm border pl-2"
          >
            Go to payment
          </button>
        </fieldset>
      </form>
      <div className="w-[50%]  relative">
        <img
          src="/public/Enthusiastic-pana.webp"
          alt="celebration illustration"
        />
        <a className="absolute inset-0" href="https://storyset.com/people">
          People illustrations by Storyset
        </a>
      </div>
    </section>
  );
};
