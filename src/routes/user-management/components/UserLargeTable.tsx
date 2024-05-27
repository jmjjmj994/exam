import { formatISO } from 'date-fns';
import { Eye, Star } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { UserManagementTableProps } from '../UserManagementTable';
export const UserLargeTable: React.FC<UserManagementTableProps> = ({
  data,
}) => (
  <div className="overflow-x-auto bg-white py-4 px-4 shadow-overlay rounded-md">
    <table className="user-management-table bg-custom-background_white ">
      <caption className="text-left text-xl inter-semi-bold">
        Venue management
      </caption>
      <thead className="w-full">
        <tr className="no-hov">
          <th className="inter-semi-bold">Image</th>
          <th className="inter-semi-bold">Name</th>
          <th className="inter-semi-bold">Updated</th>
          <th className="inter-semi-bold">Listing price</th>
          <th className="inter-semi-bold">Price</th>
          <th className="inter-semi-bold">Rating</th>
          <th className="inter-semi-bold">View</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, created, updated, price, rating, media }) => (
          <tr key={id}>
            <td className="inter-light py-2 rounded-sm ">
              <img
                className="max-w-[50px] w-full h-[50px] object-cover aspect-auto"
                src={media[0].url}
                alt=""
              />
            </td>
            <td className="inter-light py-2">{name}</td>
            <td className="inter-light py-2">
              {created &&
                formatISO(new Date(created), { representation: 'date' })}
            </td>
            <td className="inter-light py-2 rounded-sm">
              {updated &&
                formatISO(new Date(updated), { representation: 'date' })}
            </td>
            <td className="inter-light py-2">${price}</td>
            <td className="inter-light py-2">
              <span className="flex items-center gap-1">
                {' '}
                <Star size={18} />
                {rating}
              </span>
            </td>
            <td className="inter-light py-2  text-system-special-primary border bg-system-special-fill relative">
              <Link
                to={`/update-venue/${id}`}
                className=" absolute inset-0 w-full h-full flex items-center
                justify-center"
              >
                <Eye size={18} />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
