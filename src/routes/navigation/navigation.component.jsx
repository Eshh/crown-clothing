import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownSvg } from "../../assets/crown.svg";

import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  const signOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-caontainer" to="/">
          <CrownSvg className="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <span onClick={signOut} className="nav-link">
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
