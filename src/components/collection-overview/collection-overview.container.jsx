import {connect} from "react-redux";
import {compose} from "redux";

import {selectCollectionFetching} from "../../redux/shop/shop.selector";
import {createStructuredSelector} from "reselect";

import CollectionOverview from "./collection-overview.component.jsx";
import WithSpinner from "../with-spinner/with-spinner.component.jsx";

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;