//@ts-nocheck
import { BookingsType } from 'src/api/validation/venue-schema';
import { useEffect, useState } from 'react';
import { format, isAfter, isBefore, startOfMonth } from 'date-fns';
import { DayPicker, DateRange } from 'react-day-picker';
import { Door, DoorOpen } from 'phosphor-react';

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

    if (valid && selectedRange?.from !== undefined)
      handleBookingDates(selectedRange.from, valid);
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
  };
  const formatDate = (date: Date | undefined) => {
    return date ? format(date, 'MMM dd, yyyy') : '';
  };

  const footer = () => {
    if (!selectedRange) {
      return (
        <div className="flex flex-row gap-2 max-w-[70%]   bg-custom-background_white  rounded-sm">
          <div className="grow  py-4 px-2 rounded-sm bg-slate-200">
            <p>
              Check-in: <span>{formatDate(selectedRange?.from)}</span>
            </p>
          </div>

          <div className="grow py-4 bg-orange-300 px-2 rounded-sm">
            <p>
              Check-out: <span>{formatDate(selectedRange?.to)}</span>
            </p>
          </div>
        </div>
      );
    } else if (selectedRange.from && selectedRange.to) {
      return (
        <div className="flex flex-row gap-2 max-w-[70%]   bg-custom-background_white  rounded-sm">
          <div className="grow  py-4 px-2 rounded-sm bg-slate-200">
            <p>
              Check-in: <span>{formatDate(selectedRange.from)}</span>
            </p>
          </div>
          <div className="grow  py-4 px-2 rounded-sm bg-slate-200">
            <p>
              Check-out: <span>{formatDate(selectedRange.to)}</span>
            </p>
          </div>
        </div>
      );
    } else if (selectedRange.from) {
      return (
        <div className="flex flex-row gap-2 max-w-[70%]   bg-custom-background_white  rounded-sm">
          <div className="grow  py-4 px-2 rounded-sm bg-slate-200">
            <p>
              Check-in: <span>{formatDate(selectedRange.from)}</span>
            </p>
          </div>
          <div className="grow  py-4 px-2 rounded-sm bg-slate-200">
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
      footer={<div>{footer()}</div>}
    />
  );
};
