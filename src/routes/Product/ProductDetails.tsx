import { Star, Calendar, UsersThree, Crown } from 'phosphor-react';
import { formatISO } from 'date-fns';
type ProductDetailsProps = {
  bookings: number;
  created: string;
  maxGuests: number;
  rating: number;
};
export const ProductDetails: React.FC<ProductDetailsProps> = ({
  bookings,
  created,
  maxGuests,
  rating,
}) => {
  console.log(bookings);
  const formattedDate = formatISO(new Date(created), {
    representation: 'date',
  });
  return (
    <article className="text-sm bg-orange-300">
      <h2 className="text-xl">Venue details</h2>
      {bookings > 30 && <p>Popular venue</p>}

      <div>
        <div>
          <Calendar size={25} />
          <p>Listed on: {formattedDate}</p>
        </div>
        <div>
          <UsersThree size={25} />
          <p>Max guests: {maxGuests}</p>
        </div>
        <div>
          <Star size={25} />
          <p>Rating: {rating}</p>
        </div>
      </div>
    </article>
  );
};
