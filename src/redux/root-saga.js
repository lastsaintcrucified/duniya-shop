import { all, call } from "redux-saga/effects";

import {fetchCollectionStart} from "./shop/shop.sagas.js";
import {userSagas} from "./user/user.sagas.js";
import {cartSagas} from "./cart/cart.sagas.js";

export default function* rootSaga(){
    yield all([
        call(fetchCollectionStart),
        call(userSagas),
        call(cartSagas)
    ])
}