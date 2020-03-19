import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';

export const RestaurantCard = props => {
  const { imageUrl, uuid, etaRange, title, categories } = props;
  return (
    <div className='restaurant-card'>
      <div className='restaurant-card__img-wrapper'>
        <img src={imageUrl} alt={title} className='restaurant-card__img' />
      </div>
      
      <h2 className='restaurant-card__title'>{title}</h2>
      <div className='restaurant-card__categories'>
        {categories.join(' • ')}
      </div>
      <div className='restaurant-card__eta'>{etaRange}</div>
    </div>
  );
};

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  etaRange: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string)
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: ''
};
