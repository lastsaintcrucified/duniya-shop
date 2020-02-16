import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.component.styles.scss";
import { auth } from "../../firebase/firebase.utils.js";
import Loader from "../loader/loader.component.jsx";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

const Header = ({ currentUser, isLoading, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACTS
      </Link>
      {isLoading ? (
        <Loader />
      ) : currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  isLoading: state.user.isLoading,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
