import { useEffect, useState } from 'react';
import { setDate } from 'date-fns';
import { BookingsType } from 'src/api/validation/venue-schema';

type ProductFormProps = {
  id: string;
  bookings: BookingsType;
  price: number;
  maxGuests: number;
};

import { ProductCalendar } from './ProdutCalendar';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
export const ProductForm: React.FC<ProductFormProps> = ({
  id,
  bookings,
  price,
  maxGuests,
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

  const handleBookingDates = (
    dates: { from: Date; to: Date },
    flag: boolean
  ) => {
    setBookingDate({
      from: dates.from,
      to: dates.to,
    });
    console.log('called');
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
    console.log(bookingDate);
    e.preventDefault();
    if ('from' in bookingDate && 'to' in bookingDate) {
      /*     redirectUser(); */
      console.log('all present');
    } else {
      console.log('not ready');
    }
  };

  return (
    <section className="flex-col  shadow-raised rounded-md max-w-[40%] w-full self-start px-4 pt-2 pb-4">
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
        <article className="border border-custom-strokeWeak rounded-md px-2 py-2 ">
          <p>Pricing breakdown</p>

          <span className="inline-flex w-full justify-between border-b-1">
            Price per night <span>${price}</span>
          </span>

          <span className="inline-flex w-full justify-between border-b-1">
            Cleaning fee <span>$0.00</span>
          </span>
          <span className="inline-flex w-full justify-between border-b-1">
            Holidaze service fee <span>$0.00</span>
          </span>
          <span className="inline-flex w-full justify-between border-b-1">
            Total after taxes <span>$0.00</span>
          </span>
        </article>
        <PrimaryButton width="auto" type="submit">
          Confirm order
        </PrimaryButton>
      </form>
    </section>
  );
};
