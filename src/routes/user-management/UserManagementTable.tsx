import { VenueType } from 'src/api/validation/venue-schema';
import { useMediaMatch } from 'src/hooks/use-match-media.hook.tsx';
import { UserLargeTable } from './components/UserLargeTable';
import { UserSmallTable } from './components/UserSmallTable';

export type UserManagementTableProps = {
  data: VenueType[];
};

export const UserManagementTable: React.FC<UserManagementTableProps> = ({
  data,
}) => {
  const [isMobile] = useMediaMatch('1024');
  console.log(data);

  return (
    <>
      {!isMobile && <UserLargeTable data={data} />}

      {isMobile && <UserSmallTable data={data} />}
    </>
  );
};
