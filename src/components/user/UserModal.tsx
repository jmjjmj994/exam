import { User, SignOut, SignIn, UserPlus } from 'phosphor-react';
import { RefObject, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, clearStorage } from 'src/api/utilities/utilities';
import { useClickOutside } from 'src/hooks/use-click-outside.hook';
import { useKeyEscape } from 'src/hooks/use-key-escape.hook';

type UserModalFnProps = {
  handleToggler: () => void;
  setTogglerFalse: () => void;
};

type UserModalProps = {
  toggler: boolean;
  forceRenderKey: number;
  handleForceRenderKey: () => void;
  onClick: UserModalFnProps;
};

export const UserModal: React.FC<UserModalProps> = ({
  forceRenderKey,
  toggler,
  handleForceRenderKey,
  onClick,
}) => {
  const userModalRef: RefObject<HTMLElement> = useClickOutside(
    onClick.setTogglerFalse
  );
  useKeyEscape(onClick.handleToggler);


  return (
    <nav
      aria-label="user Navigation"
      ref={userModalRef}
      className={`${toggler ? 'block' : 'hidden'}  
      ${getStorage() ? '-bottom-36' : '-bottom-28'}
      shadow-raised absolute bg-custom-background_white right-0  w-[12rem] z-[1] rounded-md  border border-1`}
    >
      <ul
        key={forceRenderKey}
        className="w-full h-full  inter-light rounded-md "
      >
        <div className="h-full w-full  flex flex-col  ">
          {getStorage() && (
            <>
              <li className="flex items-center gap-4 mb-4 px-4 py-4">
                <User aria-label="profile" size={25} />
                <Link to={''}>My profile</Link>
              </li>
              <hr />
            </>
          )}

          <li
            className={`${
              getStorage() && 'pb-4'
            } flex items-center gap-4 mt-4 px-4`}
          >
            {getStorage() ? (
              <>
                <SignOut aria-label="sign out" size={25} />
                <Link
                  onClick={() => {
                    clearStorage(handleForceRenderKey), onClick.setTogglerFalse;
                  }}
                  to={'/'}
                >
                  Sign out
                </Link>
              </>
            ) : (
              <>
                <SignIn aria-label="sign in" size={25} />
                <Link onClick={() => onClick.setTogglerFalse} to={'/sign-in'}>
                  Sign in
                </Link>
              </>
            )}
          </li>

          <>
            {!getStorage() ? (
              <li className="flex items-center gap-4 mt-4  px-4 pb-4">
                <UserPlus aria-label="register" size={25} />
                <Link onClick={() => onClick.setTogglerFalse} to={'/register'}>
                  Register
                </Link>
              </li>
            ) : null}
          </>
        </div>
      </ul>
    </nav>
  );
};
