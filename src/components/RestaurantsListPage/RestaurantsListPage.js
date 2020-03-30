import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';
import { Preloader } from '../Preloader/Preloader';
import { ErrorPage } from '../ErrorPage/ErrorPage';

const defaultEtaRange = '20-30 min';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { restaurantsData, error, isLoading } = this.props;
    const restaurantCards = restaurantsData.map(
      ({ title, uuid, etaRange, categories, heroImageUrl }) => {
        return (
          <RestaurantCard
            key={uuid}
            title={title}
            uuid={uuid}
            etaRange={etaRange.text || defaultEtaRange}
            categories={categories}
            imageUrl={heroImageUrl}
          />
        );
      }
    );
    if (isLoading) {
      return <Preloader />;
    }
    if (error) {
      return <ErrorPage message={error} />;
    }

    return <div className='restaurants-list'>{restaurantCards}</div>;
  }
}

RestaurantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadData: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
  error: null,
  isLoading: false
};
