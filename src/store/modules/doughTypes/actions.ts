import { FETCH_DOUGH_TYPES } from './constants';

export const types = [
  {
    id: 1,
    price: 5,
    name: 'Thin (5€)',
    description: '​Thin and crusty pizza dough'
  },
  {
    id: 2,
    price: 7,
    name: 'Thick (7€)',
    description: '​Thick and soft pizza dough'
  }
];

export const fetchDoughTypes = () => ({
  type: FETCH_DOUGH_TYPES,
  payload: { types }
});
