import { UPDATE_ORDER, RESET_ORDER } from './constants';

export const updateOrder = (payload: object) => ({
  type: UPDATE_ORDER,
  payload
});

export const resetOrder = () => ({
  type: RESET_ORDER
});
