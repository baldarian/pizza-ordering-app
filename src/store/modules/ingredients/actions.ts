import { FETCH_INGREDIENTS } from './constants';

export const ingredients = [
  { id: 1, name: 'ham (0.5€)', price: 0.5, checked: false },
  { id: 2, name: 'beef (0.5€)', price: 0.5, checked: false },
  { id: 3, name: 'pork (0.5€)', price: 0.5, checked: false },
  { id: 4, name: 'bacon (0.5€)', price: 0.5, checked: false },
  { id: 5, name: 'chicken (0.5€)', price: 0.5, checked: false },
  { id: 6, name: 'onion (0.5€)', price: 0.5, checked: false },
  { id: 7, name: 'green pepper (0.5€)', price: 0.5, checked: false },
  { id: 8, name: 'mushrooms (0.5€)', price: 0.5, checked: false },
  { id: 9, name: 'tomato (0.5€)', price: 0.5, checked: false },
  { id: 10, name: 'olives (0.5€)', price: 0.5, checked: false },
  { id: 11, name: 'pinapple (0.5€)', price: 0.5, checked: false },
  { id: 12, name: 'spicy pepper Jalapeno (0.5€)', price: 0.5, checked: false }
];

export const fetchIngredients = () => ({
  type: FETCH_INGREDIENTS,
  payload: { ingredients }
});
