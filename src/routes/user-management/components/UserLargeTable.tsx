import { formatISO } from 'date-fns';

import { Eye, Star, Trash } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { UserManagementTableProps } from '../UserManagementTable';
import { useDeleteVenue } from '../api/use-delete-venue.hook';
export const UserLargeTable: React.FC<UserManagementTableProps> = ({
  data,
}) => {
  const [responseSuccess, error, handleDeleteVenue] = useDeleteVenue();
  console.log(responseSuccess);
  return (
    <div className="overflow-x-auto h-full   py-4 px-4  rounded-md">
      <table className="user-management-table  ">
        <caption className="text-left text-xl inter-semi-bold">
          Venue management
        </caption>
        <thead className="w-full">
          <tr className="no-hov">
            <th className="inter-semi-bold">Delete</th>
            <th className="inter-semi-bold">Name</th>
            <th className="inter-semi-bold">Listed at</th>
            <th className="inter-semi-bold">Updated at</th>
            <th className="inter-semi-bold">Price</th>
            <th className="inter-semi-bold">Rating</th>
            <th className="inter-semi-bold">View</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, created, updated, price, rating }) => (
            <tr key={id}>
              <td className="inter-light py-2 rounded-sm ">
                <button onClick={() => handleDeleteVenue(id)}>Delete</button>
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
};
