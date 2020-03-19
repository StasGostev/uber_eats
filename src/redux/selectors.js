import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRestaurantsList = createSelector(
  rootSelector,
  ({ restaurantsListData, inputValues }) => {
    if (!restaurantsListData) {
      return [];
    } else {
      const { feedItems, storesMap } = restaurantsListData;
      const { search } = inputValues
      const restaurantsList = feedItems.map(({ uuid }) => storesMap[uuid]);

      if (search) {
        const searchFilter = restaurant => {
          const { title, categories } = restaurant;
          return (
            title.toLowerCase().startsWith(search) ||
            categories
              .join()
              .toLowerCase()
              .includes(search)
          );
        };

        return restaurantsList.filter(searchFilter);
      }

      return restaurantsList;
    }
  }
);
