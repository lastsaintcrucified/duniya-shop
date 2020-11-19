import React from "react";
import {connect} from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component.jsx";
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from "./error-boundary.styles.jsx";


import {selectCollection} from "../../redux/shop/shop.selector.js";
import "./collectionpage.styles.scss";

const CollectionPage = ({collection}) =>{
    if(collection){
    const {title, items} = collection;
    
        return(
            <div className="collection-page">
                <h2 className='title'>{title}</h2>
                <div className='items'>
                    {
                        items.map(item=><CollectionItem key={item.id} item={item}/>)
                    }
                </div>
            </div>
        )
    }
    return (
        <ErrorImageOverlay>
                <ErrorImageContainer imageUrl="https://i.imgur.com/oCkEbrA.png"/>
                <ErrorImageText>Sorry,this page is lost</ErrorImageText>
        </ErrorImageOverlay>
    )
    
}

const mapStateToProps = (state,ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);