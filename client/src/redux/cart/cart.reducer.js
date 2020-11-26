import { cartActionTypes } from "./cart.types.js";
import { addItemToCart,clearItemFromCart,removeItemFromCart } from "./cart.utils.js";

const INITIAL_STATE = {
  hidden: true,
  isFetching:false,
  cartItems: [],
  error:""
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
      case cartActionTypes.FETCH_CART_ITEM_SUCCESS:
        return {
          ...state,
          cartItems:action.payload
        }
      case cartActionTypes.CLEAR_ITEM:
        return {
          ...state,
          cartItems: clearItemFromCart(state.cartItems, action.payload)
        };
      case cartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        };
      case cartActionTypes.CLEAR_CART:
        return {
          ...state,
          cartItems: []
        };
      case cartActionTypes.FETCH_CART_ITEM_FAILURE:
      case cartActionTypes.UPDATE_CART_ITEM_FAILURE:
        return {
          ...state,
          error:action.payload
        }
    default:
      return state;
  }
};

export default cartReducer;
