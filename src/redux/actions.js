export const ACTION_TYPES = {
  SAVE_RESTAURANTS_LIST: 'SAVE_RESTAURANTS_LIST',
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
  SET_INPUT_VALUE: 'SET_INPUT_VALUE'
};

const saveRestaurantsList = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS_LIST,
  payload: data
});

const searchRequest = value => ({
  type: ACTION_TYPES.SET_SEARCH_VALUE,
  payload: value
});

const setInputValue = (name, value) => ({
  type: ACTION_TYPES.SET_INPUT_VALUE,
  payload: value,
  name
});

export const getTime = () => dispatch => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let timeNow = `${hours}:${minutes}`;
  dispatch(setInputValue('time', timeNow));
};
export const changeInputValue = (name, value) => dispatch => {
  dispatch(setInputValue(name, value));
};

export const changeRestaurantList = value => dispatch => {
  dispatch(searchRequest(value));
};

export const loadRestaurantsList = () => dispatch => {
  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(saveRestaurantsList(data));
    });
};
