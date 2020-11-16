import ShopActionTypes from "./shop.types.js";
import {firestore,convertCollectionSnapshotToMap} from "../../firebase/firebase.utils.js";
import {fetchCollectionSuccess,fetchCollectionFailure} from "./shop.actions.js"

import {takeLatest,put,call} from "redux-saga/effects";



export function* fetchCollectionAsyncStart(){
  try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap,snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
}catch (error){
        yield put(fetchCollectionFailure(error.message))
}
}

export function* fetchCollectionStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START,fetchCollectionAsyncStart)
}