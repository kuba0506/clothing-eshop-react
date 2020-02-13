import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { ShopSelectors } from '../../redux/shop/shop.selectors';
import Spinner from '../spinner/Spinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: ShopSelectors.selectIsCollectionFetching
});

const CollectionsOverviewContainer = connect(mapStateToProps)(Spinner(CollectionsOverview));
// const CollectionsOverviewContainer = compose(connect(mapStateToProps), Spinner)(CollectionsOverview);

export default CollectionsOverviewContainer;