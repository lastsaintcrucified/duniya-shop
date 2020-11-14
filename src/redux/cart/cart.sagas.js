import {all,put,call,takeLatest} from "redux-saga/effects";

import userActionTypes from "../user/user.types.js";
import {clearCart} from "./cart.action.js";

export function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ])
}