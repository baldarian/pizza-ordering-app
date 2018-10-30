import { FETCH_DOUGH_TYPES } from './constants';
import { fetchDoughTypes } from './actions';

describe('doughTypes actions', () => {
  it('should create fetchDoughTypes action', () => {
    const expected = {
      type: FETCH_DOUGH_TYPES
    };

    expect(fetchDoughTypes()).toEqual(expect.objectContaining(expected));
  });
});
