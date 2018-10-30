import { createStore, combineReducers } from 'redux';

import doughTypes from './modules/doughTypes/reducer';
import ingredients from './modules/ingredients/reducer';
import order from './modules/order/reducer';

const reducers = combineReducers({
  doughTypes,
  ingredients,
  order
});

const configureStore = (state: any) => {
  return createStore(reducers, state);
};

export default configureStore;
