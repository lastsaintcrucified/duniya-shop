import React, { useEffect,lazy,Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';


import {GlobalStyle} from "./global.styles.js"
import Header from "./components/header/header.component.jsx";
import Loader from "./components/loader/loader.component.jsx";
import ErrorBoundary from "./components/error-boundary/error-boundary.component.jsx";

import {checkUserSession} from "./redux/user/user.action.js";
import { selectCurrentUser } from "./redux/user/user.selector";

const HomePage = lazy(()=>import("./pages/homepage/hompage.component"));
const ShopPage = lazy(()=>import("./pages/shop/shop.component.jsx"));
const CheckoutPage = lazy(()=>import('./pages/checkout/checkout.component'));
const SignInAndSignUp = lazy(()=>import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx"));



const App = ({checkUserSession,currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Loader/>}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={currentUser?ShopPage:SignInAndSignUp} />
              <Route exact path='/checkout' component={currentUser?CheckoutPage:SignInAndSignUp} />
              <Route
                exact
                path="/signin"
                component={SignInAndSignUp}
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
