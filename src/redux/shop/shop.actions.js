import ShopActionTypes from "./shop.types";

export const fetchCollectionStart = () =>({
    type:ShopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = (collections) =>({
    type:ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload:collections
})

export const fetchCollectionFailure = (err) =>({
    type:ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload:err
})
