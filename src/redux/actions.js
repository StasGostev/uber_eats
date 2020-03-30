export const ACTION_TYPES = {
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_LOAD_RETAURANTS_ERROR: 'SET_LOAD_RETAURANTS_ERROR',
  SAVE_RESTAURANTS_LIST: 'SAVE_RESTAURANTS_LIST',
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
  SET_INPUT_VALUE: 'SET_INPUT_VALUE'
};
const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING
});

const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING
});

const setError = error => ({
  type: ACTION_TYPES.SET_LOAD_RETAURANTS_ERROR,
  payload: error
});

const saveRestaurantsList = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS_LIST,
  payload: data
});

const setInputValue = (name, value) => ({
  type: ACTION_TYPES.SET_INPUT_VALUE,
  payload: value,
  name
});

export const changeInputValue = (name, value) => dispatch => {
  dispatch(setInputValue(name, value));
};


export const loadRestaurantsList = () => dispatch => {
  dispatch(startLoading());

  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(saveRestaurantsList(data));
    })
    .catch(error => dispatch(setError(error.message)))
    .finally(()=> dispatch(stopLoading()));
};
