import { Dispatch } from 'redux';
import { order, doughTypes, ingredients } from 'store';

export type Action = {
  type: string;
  payload: { [prop: string]: any };
};

export type Dispatch = Dispatch<Action>;

export type State = {
  doughTypes: doughTypes.State;
  ingredients: ingredients.State;
  order: order.State;
};
