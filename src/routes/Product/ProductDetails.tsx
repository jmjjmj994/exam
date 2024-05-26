import { Star, Calendar, UsersThree, Crown } from 'phosphor-react';

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
  return (
    <article>
      <h1>Venue details</h1>
      {bookings > 30 && <p>This is a popular venue</p>}

      <div>
        <div>
          <Calendar />
          <p>This venue was listed at: {created}</p>
        </div>
        <p>This venue has a maximal guests count of: {maxGuests}</p>
        <p>This venue has a rating of: {rating}</p>
      </div>
    </article>
  );
};
