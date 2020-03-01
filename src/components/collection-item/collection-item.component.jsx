import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component.jsx";
import { addItem } from "../../redux/cart/cart.action.js";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, cartItems }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
