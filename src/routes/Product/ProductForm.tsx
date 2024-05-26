import { useEffect, useState } from 'react';
import { setDate } from 'date-fns';
import { BookingsType } from 'src/api/validation/venue-schema';

type ProductFormProps = {
  id: string;
  bookings: BookingsType;
  price: number;
};

import { ProductCalendar } from './ProdutCalendar';
export const ProductForm: React.FC<ProductFormProps> = ({
  id,
  bookings,
  price,
}) => {
  const pricePerDay = price;
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
    if (flag) {
      setBookingDate((prevDates) => ({
        ...prevDates,
        from: flag ? dates.from : prevDates.from,
        to: flag ? dates.to : prevDates.to,
      }));
    }
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
  }, [bookingDate /* , pricePerDay */]);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if ('from' in bookingDate && 'to' in bookingDate) {
      /*     redirectUser(); */
    } else {
      console.log('not ready');
    }
  };
  return (
    <section className="flex-co max-w-[40%] w-full self-start">
      <form className="shadow-raised     ">
        <ProductCalendar
          handleBookingDates={handleBookingDates}
          bookings={bookings}
        />
      </form>
    </section>
  );
};
