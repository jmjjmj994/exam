import { HouseLine, TrashSimple } from 'phosphor-react';
import { formatISO } from 'date-fns';
import { options } from 'src/api/config/api-options';
type BookingCardProps = {
  created: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  id: string;
  updated: string;
};

const deleteBooking = async (id) => {
  fetch(`https://v2.api.noroff.dev/holidaze/bookings/${id}`, {
    method: 'DELETE',
    headers: options.headers,
  }).then((response) => {
    if (!response.ok) throw new Error('Error deleting booking');

    window.location.reload();
  });
};

export const BookingsCard: React.FC<BookingCardProps> = ({
  dateFrom,
  dateTo,
  guests,
  id,
}) => {
  return (
    <article className="flex inter-light text-sm flex-col max-w-[250px] h-[150px] w-full justify-between gap-4 py-2 px-2 bg-custom-background_white shadow-raised border   rounded-md transition-colors">
      <div className="flex w-full justify-between items-center">
        <div className="py-2 px-2 rounded-full text-system-success-primary border-system-success-strokeStrong border-2 bg-system-success-fil">
          <HouseLine size={20} />
        </div>

        <button
          onClick={() => {
            deleteBooking(id);
          }}
          className="py-2 px-2 text-system-error-primary border-system-error-strokeStrong border-2 bg-system-error-fill hover:bg-red-300 transition-colors rounded-full"
        >
          {' '}
          <TrashSimple size={20} />
        </button>
      </div>
      <div>
        <p>
          <span className="inter-semi-bold"> Check-in:</span>{' '}
          {formatISO(new Date(dateFrom), { representation: 'date' })}
        </p>
        <p className="inter-semi-bold">
          Check-out: {formatISO(new Date(dateTo), { representation: 'date' })}
        </p>
        <p>
          <span className="inter-semi-bold">Guests:</span> {guests}
        </p>
      </div>
    </article>
  );
};
