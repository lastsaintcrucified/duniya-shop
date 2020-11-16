

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems,item) =>{
  return cartItems.filter(cartItem=>cartItem.id!==item.id)
}

export const removeItemFromCart = (cartItems,item) =>{
  if (item.quantity>1){
    return cartItems.map(cartItem=>
      (cartItem.id===item.id)
      ? { ...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
    )
  }else{
   return cartItems.filter(cartItem=>cartItem.id!==item.id)
  }
}