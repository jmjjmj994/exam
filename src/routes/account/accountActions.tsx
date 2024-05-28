import { Calendar, CirclesThreePlus, User } from 'phosphor-react';

export type ActionsCardType = {
  id: number;
  path: string;
  title: string;
  icon: JSX.Element;
  content: string;
  area?: string;
};

export const userActionsCard: ActionsCardType[] = [
  {
    id: 1,
    path: '/profile',

    icon: <User size={25} />,
    title: 'Profile',
    content: 'View and manage your profile details',
  },

  {
    id: 2,
    path: '',
    icon: <Calendar size={25} />,

    title: 'View upcoming bookings',
    content: 'View and manage your upcoming bookings.',
  },
];

export const manageVenuesCard: ActionsCardType = {
  id: 1,
  path: '/manage-venues',
  icon: <CirclesThreePlus size={25} />,
  title: 'Manage Your Venues',
  content: 'Create, update, view, and delete your venues',
};
