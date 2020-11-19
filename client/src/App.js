import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';


import "./App.css";

import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import {GlobalStyle} from "./global.styles.js"
import Header from "./components/header/header.component.jsx";

import {checkUserSession} from "./redux/user/user.action.js";
import { selectCurrentUser } from "./redux/user/user.selector";

const App = ({checkUserSession,currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
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
