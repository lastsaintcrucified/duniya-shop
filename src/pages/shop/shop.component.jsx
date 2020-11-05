import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.jsx";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      collections: SHOP_DATA,
      props
    };
  }


  render() {
    const { collections,props } = this.state;
    return (
      <div className="shop-page">
        {collections.filter((item)=>props.location.pathname===`/shop/${item.routeName}`).map(({ id, ...otherCollectionProp }) => (
          <CollectionPreview key={id} {...otherCollectionProp} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
