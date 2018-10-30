import { UPDATE_ORDER, RESET_ORDER } from './constants';
import { updateOrder, resetOrder } from './actions';

describe('order actions', () => {
  it('should create updateOrder action', () => {
    const payload = {};
    const expectedAction = {
      type: UPDATE_ORDER,
      payload
    };

    expect(updateOrder(payload)).toEqual(expectedAction);
  });

  it('should create resetOrder action', () => {
    const expectedAction = {
      type: RESET_ORDER
    };

    expect(resetOrder()).toEqual(expectedAction);
  });
});
