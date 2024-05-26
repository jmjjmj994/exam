import { MapPin, Star, Globe } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import { formatISO } from 'date-fns';
import { useStep } from 'src/state/useStore';
export const CheckoutForm = () => {
  const {
    id,
    dateFrom,
    dateTo,
    guests,
    price,
    image,
    name,
    city,
    country,
    address,
  } = useParams();
  const checkIn = dateFrom ? new Date(dateFrom) : new Date();
  const checkOut = dateTo ? new Date(dateTo) : new Date();
  const checkInFormatted = formatISO(new Date(checkIn), {
    representation: 'date',
  });
  const checkOutFormatted = formatISO(new Date(checkOut), {
    representation: 'date',
  });
  const { nextStep } = useStep();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="max-w-[50rem] bg-custom-background_white shadow-overlay  w-full">
      <form onSubmit={onSubmit} className=" border border-1">
        <fieldset>
          <legend>Cart</legend>
          <div className="flex items-center justify-between">
            <img
              className="max-w-[150px] max-h-[150px] rounded-md"
              src={image}
              alt="image of venue"
            />
            <label className="flex flex-col" htmlFor="name">
              Name
              <input className="bg-none" type="text" defaultValue={name} />
            </label>
          </div>

          <div className="flex flex-col gap-4  max-w-[50%]">
            <label className="flex flex-col " htmlFor="check-in">
              Check in
              <input type="text" defaultValue={checkInFormatted} />
            </label>

            <label className="flex flex-col grow" htmlFor="check-out">
              Check out
              <input type="text" defaultValue={checkOutFormatted} />
            </label>
          </div>

          <div className="max-w-[50%]">
            <p>location</p>

            <div className="w-full flex flex-wrap gap-4">
              <div className="flex flex-col items-center bg-gray-100 max-w-[5rem] rounded-md text-md">
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
              <div className="flex flex-col items-center bg-gray-100 max-w-[5rem] rounded-md text-md">
                <MapPin size={20} />
                <p> {address}</p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 max-w-[5rem] rounded-md text-md">
                <Globe size={20} />
                <p> {country}</p>
              </div>
            </div>
          </div>
        </fieldset>

        <button onClick={nextStep} className="bg-purple-500">
          Go to payment
        </button>
      </form>
    </section>
  );
};

/*  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM168,96h48V208H168Zm-16,48v64H104V144ZM40,48H88V208H40ZM72,72V88a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm48,16V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm64,0V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm0-48V120a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Z"></path>
      </svg> */
