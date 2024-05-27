import { formatISO } from 'date-fns';
import { Trash, Eye } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { UserManagementTableProps } from '../UserManagementTable';
export const UserLargeTable:React.FC<UserManagementTableProps> = ({ data }) => (
  <div className="overflow-x-auto">
    <table className="user-management-table bg-custom-background_white shadow-overlay my-20  ">
      <caption className="text-left">Venue management</caption>
      <thead className="w-full">
        <tr>
          {/*         <th className="inter-bold">Quick delete</th> */}
          <th className="inter-bold">Name</th>
          <th className="inter-bold">Created</th>
          <th className="inter-bold">Updated</th>
          <th className="inter-bold">Listing price</th>
          <th className="inter-bold">Rating</th>
          <th className="inter-bold">View</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, created, updated, price, rating }) => (
          <tr key={id}>
            {/*     <td className="border-b-[1px] border-custom--d-strokeWeak py-2 bg-custom-fill w-[2rem] ">
            <button className="px-1 bg-blue-500  py-1 text-system-error-primary border-system-error-strokeStrong bg-system-error-fill rounded-md">
              <TrashSimple size={20} aria-label="trash icon" />
            </button>
          </td> */}
            <td className="border-b-[1px] border-custom--d-strokeWeak">
              {name}
            </td>
            <td className="border-b-[1px] border-custom--d-strokeWeak">
              {created &&
                formatISO(new Date(created), { representation: 'date' })}
            </td>
            <td className="border-b-[1px] border-custom--d-strokeWeak">
              {updated &&
                formatISO(new Date(updated), { representation: 'date' })}
            </td>
            <td className="border-b-[1px] border-custom--d-strokeWeak">
              ${price}
            </td>
            <td className="border-b-[1px] border-custom--d-strokeWeak">
              {rating}
            </td>
            <td className="border-b-[1px] border-custom--d-strokeWeak">
              <Link to={`/dashboard/user-venue/${id}`}>
                <Eye />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
