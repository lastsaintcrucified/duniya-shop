import ShopActionTypes from "./shop.types";

import { firestore,convertCollectionSnapshotToMap } from "../../firebase/firebase.utils.js"

export const fecthCollectionStart = () =>({
    type:ShopActionTypes.FETCH_COLLECTION_START
})

export const fecthCollectionSuccess = (collections) =>({
    type:ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload:collections
})

export const fetchCollectionFailure = (err) =>({
    type:ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload:err
})

export const fetchCollectionAsyncStart = () =>{
    return dispatch =>{
        const collectionRef = firestore.collection('collections');
        dispatch(fecthCollectionStart());
        collectionRef.get().then(snapshot =>{
        const collectionsMap =convertCollectionSnapshotToMap(snapshot);
        dispatch(fecthCollectionSuccess(collectionsMap));
      }).catch(error=>{
        dispatch(fetchCollectionFailure(error.message));
    })
    }
}