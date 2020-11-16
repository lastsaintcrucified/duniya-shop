import React, {useEffect} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import {fetchCollectionStart} from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../collectionpage/collectionpage.container.jsx";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container.jsx";


const ShopPage = ({fetchCollectionStart,match}) =>{

    useEffect(() => {
      fetchCollectionStart()   
    },[fetchCollectionStart])
 
      return (
        <div className="shop-page">
          <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
          <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
      );
 }
  


const mapDispatchToProps = dispatch =>({
 fetchCollectionStart:()=>dispatch(fetchCollectionStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);
