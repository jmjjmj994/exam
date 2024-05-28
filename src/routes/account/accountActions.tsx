import { CirclesThreePlus } from 'phosphor-react';

export type ActionsCardType = {
  id: number;
  path: string;
  title: string;
  icon: JSX.Element;
  content: string;
  area?: string;
};

export const manageVenuesCard: ActionsCardType = {
  id: 1,
  path: '/manage-venues',
  icon: <CirclesThreePlus size={25} />,
  title: 'Manage Your Venues',
  content: 'Create, update, view, and delete your venues',
};
