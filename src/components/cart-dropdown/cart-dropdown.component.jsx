import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import CustomButton from "../custom-button/custom-button.component.jsx";

import CartItem from "../cart-item/cart-item.components.jsx";
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector'

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems,history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length 
        ? (cartItems.map(item => (
          <CartItem item={item} />
        )) )
        : (<span class='empty-message'>Your cart is empty</span>) 

      }
    </div>
    <CustomButton onClick = {()=>history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateTOProps = createStructuredSelector ({
  cartItems:selectCartItems
});

export default withRouter(connect(mapStateTOProps)(CartDropdown));
