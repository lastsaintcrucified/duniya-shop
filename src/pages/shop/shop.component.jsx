import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectCollectionFetching, selectIsCollectionLoaded} from "../../redux/shop/shop.selector.js";
import {fetchCollectionAsyncStart} from "../../redux/shop/shop.actions";

import CollectionPage from "../collectionpage/collectionpage.component.jsx";
import CollectionOverview from "../../components/collection-overview/collection-overview.component.jsx";
import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount(){
      
      const {fetchCollectionAsyncStart} = this.props;
      fetchCollectionAsyncStart();
    }

    render(){
      const {match,isFetching,isCollectionLoaded} = this.props;    
      return (
        <div className="shop-page">
          <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={isFetching} {...props}/>}/>
          <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
        </div>
      );
    }
  
}

const mapStateToProps = createStructuredSelector({
  isFetching:selectCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch =>({
 fetchCollectionAsyncStart:()=>dispatch(fetchCollectionAsyncStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
