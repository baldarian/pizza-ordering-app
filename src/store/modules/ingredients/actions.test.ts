import { FETCH_INGREDIENTS } from './constants';
import { fetchIngredients } from './actions';

describe('ingredients actions', () => {
  it('should create fetchIngredients action', () => {
    const expectedAction = {
      type: FETCH_INGREDIENTS
    };

    expect(fetchIngredients()).toEqual(expect.objectContaining(expectedAction));
  });
});
