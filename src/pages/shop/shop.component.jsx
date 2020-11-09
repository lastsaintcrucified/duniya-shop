import React, { Component } from "react";
import {Route} from "react-router-dom";

import CollectionPage from "../collectionpage/collectionpage.component.jsx";
import CollectionOverview from "../../components/collection-overview/collection-overview.component.jsx";

const ShopPage = ({match}) =>{
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    );
  
}



export default ShopPage;
