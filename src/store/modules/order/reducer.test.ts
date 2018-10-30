import reducer from './reducer';
import { INITIAL_STATE } from './reducer';
import { UPDATE_ORDER, RESET_ORDER } from './constants';

describe('order reducer', () => {
  it('should return the initial state', () => {
    const received = reducer(undefined, { type: '', payload: {} });

    expect(received).toEqual(INITIAL_STATE);
  });

  it('should handle UPDATE_ORDER', () => {
    const payload = {
      selectedType: 2,
      selectedIngredients: [4, 5]
    };

    const received = reducer(INITIAL_STATE, {
      type: UPDATE_ORDER,
      payload
    });

    expect(received).toEqual({ ...received, ...payload });
  });

  it('should handle RESET_ORDER', () => {
    const received = reducer(INITIAL_STATE, { type: RESET_ORDER, payload: {} });

    expect(received).toEqual(INITIAL_STATE);
  });
});
