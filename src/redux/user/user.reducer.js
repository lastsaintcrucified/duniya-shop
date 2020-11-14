import userActionTypes from "./user.types.js";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: true,
  error:''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.CHECK_USER_SESSION:
      return {
        ...state,
        isLoading: true
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return{
        ...state,
        currentUser:action.payload,
        isLoading:false
      }
    case userActionTypes.SIGN_OUT_START:
      return{
        ...state,
        isLoading:true
      }
    case userActionTypes.SIGN_OUT_SUCCESS:
      return{
        ...state,
        currentUser:null,
        isLoading:false
      }
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_IN_FAILURE:
      return{
        ...state,
        error:action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
