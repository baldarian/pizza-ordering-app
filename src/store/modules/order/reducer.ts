import { Action } from '../commonTypes';
import { UPDATE_ORDER, RESET_ORDER } from './constants';
import { State } from './types';

export const INITIAL_STATE: State = {
  selectedType: 0,
  selectedIngredients: []
};

const reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UPDATE_ORDER:
      return { ...state, ...action.payload };
    case RESET_ORDER:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
