import {connect} from "react-redux";
import {compose} from "redux";

import {selectIsCollectionLoaded} from "../../redux/shop/shop.selector.js";
import {createStructuredSelector} from "reselect";

import CollectionPage from "./collectionpage.component.jsx";
import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
  })

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;