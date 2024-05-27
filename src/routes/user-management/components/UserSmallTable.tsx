import { Star, Eye } from 'phosphor-react';
import { formatISO } from 'date-fns';
import { Link } from 'react-router-dom';
import { UserManagementTableProps } from '../UserManagementTable';
export const UserSmallTable: React.FC<UserManagementTableProps> = ({
  data,
}) => (
  <div className=" grid cols-auto  gap-4">
    {data.map(({ id, name, created, updated, price, rating }) => (
      <Link to={''}>
        <article
          key={id}
          className=" bg-white shadow-overlay hover:bg-slate-50 rounded-sm flex flex-wrap gap-1 px-2 py-3 inter-light  text-sm md:text-base justify-between"
        >
          <div className="flex items-center inter-light gap-4 text-system-special-primary border px-1 py-1 bg-system-special-fill rounded-md">
            <p className="">
              #
              {created &&
                formatISO(new Date(created), { representation: 'date' })}
            </p>

            <span className="flex items-center gap-1">
              <Star className="text-amber-500" />
              {rating}{' '}
            </span>
          </div>
          <div className="flex flex-col  gap-[0.5px]">
            <p className="inter-semi-bold">{name}</p>
            <p className="inter-bold">${price}</p>
          </div>
        </article>
      </Link>
    ))}
  </div>

  /*  <article>
    <div>
      <p>
        Created: <span>2024-05-27</span>
      </p>
      <p>
        Updated: <span>2024-05-27</span>
      </p>
      <span>
        <Star />4{' '}
      </span>
    </div>
    <div>
      <p>La plaze Del Snorlax</p>
    </div>
    <div>
      <p>View venue</p>
    </div>
  </article> */
);
