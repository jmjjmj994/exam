import { useEffect, useState } from 'react';
import { BookingsType, LocationType } from 'src/api/validation/venue-schema';

import { ProductCalendar } from './ProdutCalendar';
import { PrimaryButton } from 'src/components/buttons/PrimaryButton';
import { ToasterProvider } from 'src/components/toast-notification/Toaster';
import {
  errorToast,
  successToast,
} from 'src/components/toast-notification/toast';
import { options } from 'src/api/config/api-options';

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
  /*   name,
  image, */
  bookings,
  price,
  maxGuests,
  /*   location: { city, address, country }, */
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
  /*   const navigate = useNavigate(); */
  const handleBookingDates = (dates: {
    from: Date | null;
    to: Date | null;
  }) => {
    setBookingDate(dates);
    console.log(dates, 'data in booking func');
  };
  useEffect(() => {
    console.log(bookingPrice);
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
      bookVenue(bookingDate.from, bookingDate.to, maxGuests, id);
      successToast('Successfully created a venue', 'top-center');
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

const bookVenue = (from: Date, to: Date, guests: number, id: string) => {
  console.log(from, to, guests, id);
  fetch('https://v2.api.noroff.dev/holidaze/bookings', {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify({
      dateFrom: from,
      dateTo: to,
      guests: guests,
      venueId: id,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};
