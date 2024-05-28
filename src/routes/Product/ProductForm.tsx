import { useEffect, useState } from 'react';
import { BookingsType, LocationType } from 'src/api/validation/venue-schema';
import { useNavigate } from 'react-router-dom';
import { useKeyEscape } from 'src/hooks/use-key-escape.hook';
import { X } from 'phosphor-react';
type ProductFormProps = {
  id: string;
  name: string;
  bookings: BookingsType;
  price: number;
  maxGuests: number;
  isMobile: boolean;
  active: boolean;
  onClick: () => void;
  image: string;
  location: LocationType;
};

import { ProductCalendar } from './ProdutCalendar';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { createPortal } from 'react-dom';
export const ProductForm: React.FC<ProductFormProps> = ({
  id,
  name,
  image,
  bookings,
  price,
  maxGuests,
  isMobile,
  active,
  location: { city, address, country },
  onClick,
}) => {
  const pricePerDay = price;
  const [guests, setGuests] = useState(1);
  const [bookingPrice, setBookingPrice] = useState(price);
  const [bookingDate, setBookingDate] = useState<{
    from: Date | null;
    to: Date | null;
  }>({
    from: null,
    to: null,
  });
  const navigate = useNavigate();

  const handleBookingDates = (dates: {
    from: Date | null;
    to: Date | null;
  }) => {
    setBookingDate(dates);
    console.log(dates, 'data in booking func');
  };

  useEffect(() => {
    const countDays = (from: Date | null, to: Date | null) => {
      if (!from || !to) return 0;
      if (from > to) {
        [from, to] = [to, from];
      }
      const Difference_In_Time = to.getTime() - from.getTime();
      let Difference_In_Days = Math.round(
        Difference_In_Time / (1000 * 3600 * 24)
      );
      if (Difference_In_Days === 0) {
        Difference_In_Days = 1;
      }

      return Difference_In_Days;
    };

    const days = countDays(bookingDate.from, bookingDate.to);

    setBookingPrice(days * pricePerDay);
  }, [bookingDate, pricePerDay]);
  const handleGuests = (e: number) => {
    setGuests(e);
  };
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(guests);
    if (bookingDate.from && bookingDate.to) {
      navigate(
        `/checkout/${id}/${bookingDate.from.toISOString()}/${bookingDate.to.toISOString()}/${guests}/${bookingPrice}/${name}/${encodeURIComponent(
          image
        )}/${city}/${country}/${address}`
      );
    } else {
      console.log('not ready');
    }
  };

  useKeyEscape(onClick);

  const productForm = (
    <section
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      className={`${
        isMobile
          ? 'fixed inset-0 rounded-none   bg-orange-500'
          : 'max-w-[40%] static'
      }   
      ${
        isMobile
          ? active
            ? 'translate-y-0 transition-all ease-out'
            : 'translate-y-full transition-all ease-out'
          : null
      }
      flex-col  shadow-raised rounded-md w-full self-start px-4 pt-2 pb-4 `}
    >
      <button
        className="md:hidden"
        onClick={onClick}
        aria-label="close modal"
        type="button"
      >
        <X size={25} aria-label="close icon" />
      </button>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <ProductCalendar
          handleBookingDates={handleBookingDates}
          bookings={bookings}
        />
        <fieldset className="max-w-[70%] mb-4 border border-custom-strokeWeak rounded-md px-2 py-2">
          <legend className="font-int-bold leading-10">Guests:</legend>
          <select
            value={guests}
            onChange={(e) => handleGuests(Number(e.target.value))}
            className="py-2 px-2 rounded-md w-full"
          >
            {Array.from({ length: maxGuests as number }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </fieldset>
        <PrimaryButton width="auto" type="submit">
          Confirm order
        </PrimaryButton>
      </form>
    </section>
  );

  return isMobile
    ? createPortal(
        productForm,
        document.getElementById('portal') as HTMLDivElement
      )
    : productForm;
};
