import {takeLatest, all, call, put} from "redux-saga/effects";
import userActionTypes from "./user.types.js";
import {auth, googleProvider, createUserProfileDocument,getCurrentUser} from "../../firebase/firebase.utils.js";
import {signInSuccess,signInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess} from "./user.action.js"
import {fetchCartItemStart} from "../cart/cart.action.js";

export function* getSnapshotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument,userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
        id:userSnapshot.id,
        ...userSnapshot.data()
    }))
        yield put(fetchCartItemStart(userSnapshot))
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* getSnapshotFromUserAuthForSignUp(userAuth,displayName){
    try{
        const userRef = yield call(createUserProfileDocument,[userAuth,displayName]);
        const userSnapshot = yield userRef.get();
        yield put(signUpSuccess({
        id:userSnapshot.id,
        ...userSnapshot.data()
    }))
    }catch(error){
        yield put(signUpFailure(error))
    }
}

export function* signInWithGoogle(){
   try{
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
   }catch(error){
    yield put(signInFailure(error.message))
   }
}

export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(signInFailure(error.message))
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }catch(error){
        yield put(signInFailure(error.message))
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFailure(error))
    }
}

export function* signUp({payload:{email,password,displayName}}){

    try{   
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuthForSignUp(user,displayName);
    }catch(error){
        yield put(signUpFailure(error.message))
    }
}

export function* onGooleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onSignOut(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,signOut)
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START,signUp)
}

export function* userSagas(){
    yield all([
        call(onGooleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onSignOut),
        call(onSignUpStart)
    ])
}