import { useEffect, useState } from 'react';
import { BookingsType, LocationType } from 'src/api/validation/venue-schema';
import { useNavigate } from 'react-router-dom';
import { ProductCalendar } from './ProdutCalendar';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { ToasterProvider } from 'src/components/toast-notification/Toaster';
import { errorToast } from 'src/components/toast-notification/toast';

type ProductFormProps = {
  id: string;
  name: string;
  bookings: BookingsType;
  price: number;
  maxGuests: number;
  isMobile: boolean;
  image: string;
  location: LocationType;
};

export const ProductForm: React.FC<ProductFormProps> = ({
  id,
  name,
  image,
  bookings,
  price,
  maxGuests,
  location: { city, address, country },
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
    if (bookingDate.from && bookingDate.to) {
      navigate(
        `/checkout/${id}/${bookingDate.from.toISOString()}/${bookingDate.to.toISOString()}/${guests}/${bookingPrice}/${name}/${encodeURIComponent(
          image
        )}/${city}/${country}/${address}`
      );
    } else {
      errorToast('Please specify check in and check out date', 'top-center');
    }
  };

  const productForm = (
    <>
      <ToasterProvider />
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 max-w-[35rem] w-full"
      >
        <ProductCalendar
          handleBookingDates={handleBookingDates}
          bookings={bookings}
        />
        <fieldset className="max-w-[100%] mb-4 border border-custom-strokeWeak rounded-md px-2 py-2">
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
    </>
  );

  return productForm;
};
