import { compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { ACTION_TYPES } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const initialState = {
  isLoading: false,
  error:null,
  restaurantsListData: null,
  inputValues: {
    address: '',
    time: '',
    search: ''
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS_LIST:
      return {
        ...state,
        restaurantsListData: action.payload,
        error: null
      };
    case ACTION_TYPES.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    case ACTION_TYPES.SET_INPUT_VALUE:
      return {
        ...state,
        inputValues: { 
          ...state.inputValues, 
          [action.name]: action.payload }
      };
    case ACTION_TYPES.SET_LOAD_RETAURANTS_ERROR :
      return {
        ...state,
        error: action.payload,
        restaurantsListData: null
      }
    case ACTION_TYPES.START_LOADING : 
      return {
        ...state,
        isLoading: true
      }
    case ACTION_TYPES.STOP_LOADING :
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
