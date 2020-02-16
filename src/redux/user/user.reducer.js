import { userActionTypes } from "./user.types.js";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: true
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        currentUser: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;
