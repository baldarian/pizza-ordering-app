import reducer from './reducer';
import { INITIAL_STATE } from './reducer';
import { FETCH_DOUGH_TYPES } from './constants';
import { types } from './actions';

describe('doughTypes reducer', () => {
  it('should return the initial state', () => {
    const received = reducer(undefined, { type: '', payload: {} });

    expect(received).toEqual(INITIAL_STATE);
  });

  it('should handle FETCH_DOUGH_TYPES', () => {
    const received = reducer(INITIAL_STATE, {
      type: FETCH_DOUGH_TYPES,
      payload: { types }
    });

    expect(received).toEqual(types);
  });
});
