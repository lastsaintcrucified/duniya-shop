import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component.jsx";

import CartItem from "../cart-item/cart-item.components.jsx";

import "./cart-dropdown.styles.scss";

const CartDropdown = cartItems => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateTOProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateTOProps)(CartDropdown);
