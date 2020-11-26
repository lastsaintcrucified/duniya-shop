import React,{useEffect} from "react";
import {connect} from "react-redux";

import {selectCartItems} from "../../redux/cart/cart.selector.js";
import {createStructuredSelector} from "reselect";
import {updateCartItemStart} from "../../redux/cart/cart.action.js";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component.jsx";

const HomePage = ({cartItems,updateCartItemStart}) => {
  
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
const mapStateToProps = createStructuredSelector ({
  cartItems:selectCartItems
});

const mapDispatchToProps = (dispatch) => ({
  updateCartItemStart: (cartItems) => dispatch(updateCartItemStart(cartItems))
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
