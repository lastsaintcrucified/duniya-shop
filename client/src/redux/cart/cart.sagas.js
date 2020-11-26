import {all,put,call,takeLatest} from "redux-saga/effects";

import userActionTypes from "../user/user.types.js";
import {cartActionTypes} from "./cart.types.js";
import {clearCart, fetchCartItemFailure, fetchCartItemSuccess, updateCartItemFailure, updateCartItemSuccess} from "./cart.action.js";
import { firestore,getCurrentUser } from "../../firebase/firebase.utils";

export function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* updateCartItemAsync({payload:{cartItems}}){
    try{
        const currentUser = yield getCurrentUser();
        
       const snap = yield firestore.collection(`users`).doc(`${currentUser.uid}`);
       yield snap.update({cartItems})
       yield put(updateCartItemSuccess());
        
       
    }catch(error){
        yield put(updateCartItemFailure(error.message))
    }
}

export function* fetchCartItemAsync({payload}){
    try{
        const cartRef = yield firestore.doc(`users/${payload.id}`);
        const snapShot = yield cartRef.get();
        const cartItems = yield snapShot.data().cartItems;
        yield put(fetchCartItemSuccess(cartItems));
    }catch(error){
        yield put(fetchCartItemFailure(error.message));
    }
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}

export function* onUpdateItem(){
    yield takeLatest(cartActionTypes.UPDATE_CART_ITEM_START,updateCartItemAsync)
}

export function* onFetchCartItem(){
    yield takeLatest(cartActionTypes.FETCH_CART_ITEM_START,fetchCartItemAsync)

}

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess),
        call(onFetchCartItem),
        call(onUpdateItem)
        
    ])
}