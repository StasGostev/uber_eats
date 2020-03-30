import { RestaurantsListPage } from './RestaurantsListPage';
import { connect } from 'react-redux';
import { loadRestaurantsList } from '../../redux/actions';
import { selectRestaurantsList, selectRestauranrListError, selectIsLoading } from '../../redux/selectors';

function mapState2Props(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
    error: selectRestauranrListError(state),
    isLoading: selectIsLoading(state)
  }
};

const mapDispatch2Props =  {
  loadData: loadRestaurantsList,
};

const EnchancedListPage = connect(mapState2Props, mapDispatch2Props)(RestaurantsListPage);

export { EnchancedListPage as RestaurantsListPage };