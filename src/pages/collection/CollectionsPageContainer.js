import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { ShopSelectors } from '../../redux/shop/shop.selectors';
import Spinner from '../../components/spinner/Spinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !ShopSelectors.selectIsCollectionLoaded(state)
});

const CollectionPageContaienr = connect(mapStateToProps)(Spinner(CollectionPage));
// const CollectionsOverviewContainer = compose(connect(mapStateToProps), Spinner)(CollectionsOverview);

export default CollectionPageContaienr;
