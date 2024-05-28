import { Link } from 'react-router-dom';

type NavbarListType = {
  id: number;
  label: string;
  path: string;
}[];

const navbarLinks: NavbarListType = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'Venues', path: '/' },
];

export const NavbarList = () => (
  <ul className="flex flex-col gap-4 px-4 py-4 text-xl md:flex-row md:px-0 md:py-0  md:text-base md:gap-10">
    {navbarLinks.map(({ id, label, path }) => (
      <li key={id}>
        <Link to={path}>{label}</Link>
      </li>
    ))}
  </ul>
);
