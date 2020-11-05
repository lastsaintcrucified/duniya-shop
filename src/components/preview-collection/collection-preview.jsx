import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";
import { withRouter } from "react-router-dom";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, history, match }) => {
  console.log(history)
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
