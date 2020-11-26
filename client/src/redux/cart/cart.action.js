import { cartActionTypes } from "./cart.types.js";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItem = item =>({
  type: cartActionTypes.CLEAR_ITEM,
  payload:item
});

export const removeItem = item =>({
  type: cartActionTypes.REMOVE_ITEM,
  payload:item
})

export const clearCart = () =>({
  type:cartActionTypes.CLEAR_CART
})

export const updateCartItemStart = cartItems =>({
  type:cartActionTypes.UPDATE_CART_ITEM_START,
  payload:cartItems
})

export const updateCartItemSuccess = ()=>({
  type:cartActionTypes.UPDATE_CART_ITEM_SUCCESS
})

export const updateCartItemFailure = error =>({
  type:cartActionTypes.UPDATE_CART_ITEM_FAILURE,
  payload:error
})

export const fetchCartItemStart = (currentUser) =>({
  type:cartActionTypes.FETCH_CART_ITEM_START,
  payload:currentUser
  
})

export const fetchCartItemSuccess = fetchedCartItems =>({
  type:cartActionTypes.FETCH_CART_ITEM_SUCCESS,
  payload:fetchedCartItems
})

export const fetchCartItemFailure = error =>({
  type:cartActionTypes.FETCH_CART_ITEM_FAILURE,
  payload:error
})