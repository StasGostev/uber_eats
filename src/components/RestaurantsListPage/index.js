import { RestaurantsListPage } from './RestaurantsListPage';
import { connect } from 'react-redux';
import { loadRestaurantsList } from '../../redux/actions';
import { selectRestaurantsList } from '../../redux/selectors';

function mapState2Props(state) {
  return {
  restaurantsData: selectRestaurantsList(state),
  }
};

const mapDispatch2Props =  {
  loadData: loadRestaurantsList,
};

const EnchancedListPage = connect(mapState2Props, mapDispatch2Props)(RestaurantsListPage);

export { EnchancedListPage as RestaurantsListPage };