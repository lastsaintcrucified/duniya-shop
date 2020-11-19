import React, {useEffect,lazy,Suspense} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import {fetchCollectionStart} from "../../redux/shop/shop.actions";
import Loader from "../../components/loader/loader.component.jsx";


const CollectionPageContainer = lazy(()=>import("../collectionpage/collectionpage.container.jsx"));
const CollectionOverviewContainer = lazy(()=>import("../../components/collection-overview/collection-overview.container.jsx"))

const ShopPage = ({fetchCollectionStart,match}) =>{

    useEffect(() => {
      fetchCollectionStart()   
    },[fetchCollectionStart])
 
      return (
        <div className="shop-page">
          <Suspense fallback={Loader}>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
          </Suspense>
        </div>
      );
 }
  


const mapDispatchToProps = dispatch =>({
 fetchCollectionStart:()=>dispatch(fetchCollectionStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);
