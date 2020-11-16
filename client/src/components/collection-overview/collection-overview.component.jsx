import React from "react";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCollectionForOverView} from "../../redux/shop/shop.selector.js";


import CollectionPreview from "../preview-collection/collection-preview.component.jsx";
import "./collection-overview.styles.scss"

const CollectionOverview = ({collections}) =>{
    return(
        <div className="collection-overview">
            {collections.map(({ id, ...otherCollectionProp }) => (
          <CollectionPreview key={id} {...otherCollectionProp} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForOverView
});

export default connect(mapStateToProps)(CollectionOverview);