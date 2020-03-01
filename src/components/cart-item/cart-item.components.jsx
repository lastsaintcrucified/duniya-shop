import React from "react";
import "./cart-item.styles.scss";

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div>
    <img src={imageUrl} />
    <div>
      <span>{name}</span>
      <span>
        {quantity} x {price}
      </span>
    </div>
  </div>
);

export default cartItem;
