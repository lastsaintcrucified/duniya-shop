import React,{useEffect} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import CustomButton from "../custom-button/custom-button.component.jsx";

import CartItem from "../cart-item/cart-item.components.jsx";
import {addCollectionAndDocument, firestore} from "../../firebase/firebase.utils.js";
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.action'

import "./cart-dropdown.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selector.js";

const CartDropdown = ({ cartItems,history,dispatch,currentUser }) => {

  useEffect(() => {
    if(currentUser){
      const userRef = firestore.doc(`users/${currentUser.id}`);
      userRef.update({cartItems}).then(()=>console.log("updated successfully!")).catch(err=>console.log(err))
    }
  }, [currentUser])
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length 
          ? (cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          )) )
          : (<span className='empty-message'>Your cart is empty</span>) 
  
        }
      </div>
      <CustomButton onClick = { () =>{
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }
       }>GO TO CHECKOUT</CustomButton>
    </div>
  )
};

const mapStateTOProps = createStructuredSelector ({
  cartItems:selectCartItems,
  currentUser:selectCurrentUser
});



export default withRouter(connect(mapStateTOProps)(CartDropdown));
