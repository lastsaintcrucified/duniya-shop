import React, { Component } from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import CollectionPage from "../collectionpage/collectionpage.component.jsx";
import CollectionOverview from "../../components/collection-overview/collection-overview.component.jsx";
import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";

import {firestore,convertCollectionSnapshotToMap} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions.js";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state = {
    loading:true
  }
    unSubscribeFromSnapShot = null;
    componentDidMount(){
      const {updateCollections} = this.props;
      const collectionRef = firestore.collection('collections');
      this.unSubscribeFromSnapShot =  collectionRef.onSnapshot(async snapshot =>{
       const collectionsMap =convertCollectionSnapshotToMap(snapshot);
       updateCollections(collectionsMap);
       this.setState({loading:false});
     })

    }

    render(){
      const {match} = this.props;
      const {loading} = this.state;
      
      return (
        <div className="shop-page">
          <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
          <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
        </div>
      );
    }
  
}

const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null,mapDispatchToProps)(ShopPage);
