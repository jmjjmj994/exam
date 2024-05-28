import { Star, UsersThree } from 'phosphor-react';

type ProductDetailsProps = {
  bookings: number;
  created: string;
  maxGuests: number;
  rating: number;
};
export const ProductDetails: React.FC<ProductDetailsProps> = ({
  /*   bookings, */
  /*   created, */
  maxGuests,
  rating,
}) => {
  /*   const formattedDate = formatISO(new Date(created), {
    representation: 'date',
  }); */
  return (
    <article className="text-sm  flex flex-col gap-2">
      <h2 className="text-base inter-semi-bold">Details</h2>

      <div className="flex gap-2">
        <div className="flex flex-col items-center">
          <UsersThree size={25} />
          <p> {maxGuests}</p>
        </div>
        <div className="flex flex-col items-center">
          <Star size={25} />
          <p> {rating}</p>
        </div>
      </div>
    </article>
  );
};
