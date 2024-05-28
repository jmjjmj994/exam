//@ts-nocheck
import { BookingsType } from 'src/api/validation/venue-schema';
import { useEffect, useState } from 'react';
import { format, isAfter, isBefore, startOfMonth } from 'date-fns';
import { DayPicker, DateRange } from 'react-day-picker';
/* import { Door, DoorOpen } from 'phosphor-react';
 */
type ProductCalendarProps = {
  bookings: BookingsType;
  handleBookingDates: (arg, flag) => void;
};

function rangeIncludeDate(range: DateRange, date: string) {
  return Boolean(
    range.from &&
      range.to &&
      isAfter(date, range.from) &&
      isBefore(date, range.to)
  );
}

export const ProductCalendar: React.FC<ProductCalendarProps> = ({
  handleBookingDates,
  bookings,
}) => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  useEffect(() => {
    let valid;
    if (
      selectedRange !== undefined &&
      'from' in selectedRange &&
      selectedRange.to !== undefined
    ) {
      valid = true;
    } else {
      valid = false;
    }

    if (
      valid &&
      selectedRange?.from !== undefined &&
      selectedRange.to !== undefined
    )
      handleBookingDates(
        {
          from: selectedRange.from,
          to: selectedRange.to,
        },
        valid
      );

    if (valid && selectedRange?.from !== undefined)
      handleBookingDates(
        {
          from: selectedRange.from,
          to: selectedRange.to,
        },
        valid
      );
  }, [selectedRange]);

  const disabledDates = bookings?.map((booking) => ({
    from: new Date(booking.dateFrom),
    to: new Date(booking.dateTo),
  }));

  const handleSelect = (range: DateRange | undefined, selectedDate: Date) => {
    setSelectedRange(() => {
      if (
        range &&
        disabledDates?.some((disabledDate) =>
          rangeIncludeDate(range, disabledDate.from.toString())
        )
      ) {
        if (range.from && isBefore(selectedDate, disabledDates.from)) {
          return { from: range.from, to: undefined };
        }
        return { from: range.to, to: undefined };
      }
      return range;
    });
    handleBookingDates(range || { from: null, to: null }, !!range); // Pass true if range is present, false otherwise
  };
  const footer = () => {
    const formatDate = (date: Date | undefined) => {
      return date ? format(date, 'MMM dd, yyyy') : '';
    };
    if (!selectedRange) {
      return (
        <div className="flex flex-row gap-2 w-full bg-custom-background_white  mt-4   rounded-md px-1 py-1">
          <div className="grow flex items-center justify-center rounded-sm ">
            <p>
              Check-in: <span>{formatDate(selectedRange?.from)}</span>
            </p>
          </div>

          <div className="grow py-2 px-2 rounded-sm">
            <p>
              Check-out: <span>{formatDate(selectedRange?.to)}</span>
            </p>
          </div>
        </div>
      );
    } else if (selectedRange.from && selectedRange.to) {
      return (
        <div className="flex flex-row gap-2 w-full   bg-custom-background_white   rounded-md mt-4  px-1 py-1">
          <div className="grow  py-2 px-4 rounded-sm ">
            <p>
              Check-in: <span>{formatDate(selectedRange.from)}</span>
            </p>
          </div>
          <div className="grow  py-2 px-4 rounded-sm 0">
            <p>
              Check-out: <span>{formatDate(selectedRange.to)}</span>
            </p>
          </div>
        </div>
      );
    } else if (selectedRange.from) {
      return (
        <div className="flex flex-row gap-2 w-full   bg-custom-background_white  mt-4   rounded-md px-1 py-1">
          <div className="grow  py-2 px-4 rounded-sm ">
            <p>
              Check-in: <span>{formatDate(selectedRange.from)}</span>
            </p>
          </div>
          <div className="grow  py-2 px-4 rounded-sm ">
            <p>Check-out:</p>
          </div>
        </div>
      );
    } else {
      return <p>Check in: Please select check-in date</p>;
    }
  };

  const today = new Date();
  const currentMonth = startOfMonth(today);
  return (
    <DayPicker
      mode="range"
      selected={selectedRange}
      onSelect={(dates) => handleSelect(dates, new Date())}
      disabled={[{ before: today }, ...disabledDates]}
      fromMonth={currentMonth}
      footer={
        <div className="flex items-center justify-center w-full ">
          {footer()}
        </div>
      }
    />
  );
};
