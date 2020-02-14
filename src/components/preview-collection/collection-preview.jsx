import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherCollectionItemProp }) => (
            <CollectionItem key={id} {...otherCollectionItemProp} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
