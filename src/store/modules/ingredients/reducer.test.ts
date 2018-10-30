import reducer from './reducer';
import { INITIAL_STATE } from './reducer';
import { FETCH_INGREDIENTS } from './constants';
import { ingredients } from './actions';
describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    const received = reducer(undefined, { type: '', payload: {} });

    expect(received).toEqual(INITIAL_STATE);
  });

  it('should handle FETCH_DOUGH_TYPES', () => {
    const received = reducer(INITIAL_STATE, {
      type: FETCH_INGREDIENTS,
      payload: { ingredients }
    });

    expect(received).toEqual(ingredients);
  });
});
