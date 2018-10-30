export interface Ingredient {
  id: number;
  price: number;
  name: string;
  checked: boolean;
}

export type State = Ingredient[];
