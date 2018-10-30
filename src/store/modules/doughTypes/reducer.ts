import { Dough } from './types';
import { Action } from '../commonTypes';
import { FETCH_DOUGH_TYPES } from './constants';

export const INITIAL_STATE: Dough[] = [];

const reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case FETCH_DOUGH_TYPES:
      return [...action.payload.types];
    default:
      return state;
  }
};

export default reducer;
