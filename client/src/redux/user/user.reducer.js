import userActionTypes from "./user.types.js";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error:''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
    case userActionTypes.SIGN_UP_SUCCESS:
      return{
        ...state,
        currentUser:action.payload,
        isLoading:false
      }
    case userActionTypes.SIGN_UP_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_IN_FAILURE:
      return{
        ...state,
        error:action.payload
      }
    case userActionTypes.CHECK_USER_SESSION:
      return{
        ...state,
        isLoading:true
      }
    default:
      return state;
  }
};

export default userReducer;
