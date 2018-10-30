import { Ingredient } from './types';
import { Action } from '../commonTypes';
import { FETCH_INGREDIENTS } from './constants';

export const INITIAL_STATE: Ingredient[] = [];

const reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS:
      return [...action.payload.ingredients];
    default:
      return state;
  }
};

export default reducer;
