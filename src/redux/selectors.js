import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRestaurantsList = createSelector(
  rootSelector,
  ({ restaurantsListData, inputValues }) => {
    if (!restaurantsListData) {
      return [];
    } else {
      const { feedItems, storesMap } = restaurantsListData;
      const { search } = inputValues;
      const restaurantsList = feedItems.map(({ uuid }) => storesMap[uuid]);

      if (search) {
        const searchFilter = restaurant => {
          const { title, categories } = restaurant;
          const searchToLowerCase = search.toLowerCase();
          return (
            title.toLowerCase().startsWith(searchToLowerCase) ||
            categories
              .join()
              .toLowerCase()
              .includes(searchToLowerCase)
          );
        };

        return restaurantsList.filter(searchFilter);
      }

      return restaurantsList;
    }
  }
);

export const selectRestauranrListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);

export const selectInputValues = createSelector(
  rootSelector,
  ({inputValues}) => inputValues
);
