import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownSvg } from "../../assets/crown.svg";

import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-caontainer" to="/">
          <CrownSvg className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="logo-caontainer" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
            <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
