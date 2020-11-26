import React,{useEffect} from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import {updateCartItemStart} from "../../redux/cart/cart.action";

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount } from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector.js";


const CartIcon = ({ toggleCartHidden, itemNumber,cartItems,updateCartItemStart}) =>{
  useEffect(() => {
    
      updateCartItemStart({cartItems});
  }, [updateCartItemStart,cartItems])
  return (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemNumber}</span>
  </div>
);}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  updateCartItemStart:(updateCartData) => dispatch(updateCartItemStart(updateCartData))
});

const mapStateToProps = createStructuredSelector  ({
  itemNumber: selectCartItemsCount,
  currentUser:selectCurrentUser,
  cartItems:selectCartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
