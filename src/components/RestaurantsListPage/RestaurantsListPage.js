import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';

const defaultEtaRange = '20-30 min';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const restaurantCards = this.props.restaurantsData.map(
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

      return <div className='restaurants-list'>{restaurantCards}</div>;
    }
}

RestaurantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadData: PropTypes.func.isRequired
};

RestaurantsListPage.defaultProps = {
  restaurantsData: []
};
