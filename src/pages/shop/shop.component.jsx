import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import {fetchCollectionAsyncStart} from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../collectionpage/collectionpage.container.jsx";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container.jsx";


class ShopPage extends React.Component {

    componentDidMount(){
      const {fetchCollectionAsyncStart} = this.props;
      fetchCollectionAsyncStart();
    }

    render(){
      const {match} = this.props;    
      return (
        <div className="shop-page">
          <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
          <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
      );
    }
  
}


const mapDispatchToProps = dispatch =>({
 fetchCollectionAsyncStart:()=>dispatch(fetchCollectionAsyncStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);
