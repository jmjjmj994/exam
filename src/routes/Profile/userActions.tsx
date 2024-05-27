import {
  HouseLine,
  Calendar,
  ArrowClockwise,
  CirclesThreePlus,
  Trash,
  Eye,
  Star,
} from 'phosphor-react';

export type ActionsCardType = {
  id: number;
  path: string;
  title: string;
  icon: JSX.Element;
  content: string;
};

export const userActionsCard: ActionsCardType[] = [
  {
    id: 1,
    path: '/',
    icon: <HouseLine size={25} />,
    title: 'Create a booking at a venue',
    content:
      'As a registered Venue manager, easily add a new Venue to your portfolio. Showcase your space and attract potential clients effortlessly.',
  },
  {
    id: 2,
    path: '',
    icon: <Calendar size={25} />,
    title: 'View upcoming bookings',
    content:
      'Click here to start scheduling your event. Choose your preffered venue,  select the date and time, and confirm your booking effortlessly',
  },
];


export const manageVenuesCard: ActionsCardType = {
  id: 1,
  path: '/manage-venues',
  icon: <CirclesThreePlus size={25} />,
  title: 'Manage Your Venues',
  content: 'Create, update, view, and delete your venues all in one place. Simplify your venue management process and attract more clients.',
};








export const venueManagerActionsCard: ActionsCardType[] = [
  {
    id: 1,
    path: '/create-venue',
    icon: <CirclesThreePlus size={25} />,
    title: 'Create a new venue',
    content:
      'As a registered Venue manager, easily add a new Venue to your portfolio. Showcase your space and attract potential clients effortlessly.',
  },
  {
    id: 2,
    path: '',
    icon: <ArrowClockwise size={25} />,
    title: 'Update your venues',
    content:
      'Click here to start scheduling your event. Choose your preffered venue,  select the date and time, and confirm your booking effortlessly',
  },
  {
    id: 3,
    path: '',
    icon: <Eye size={25} />,
    title: 'View bookings for your venue',
    content:
      'Click here to start scheduling your event. Choose your preffered venue,  select the date and time, and confirm your booking effortlessly',
  },
  {
    id: 4,
    path: '',
    icon: <Trash size={25} />,
    title: 'Delete a venue',
    content:
      ' Remove outdated or inactive Venues from your management list. Streamline your portfolio and focus on promoting your most relevant spaces.',
  },
];
