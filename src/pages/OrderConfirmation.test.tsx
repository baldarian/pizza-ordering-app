import React from 'react';
import { shallow } from 'enzyme';
import { doughTypes, ingredients, order } from 'store';

import { OrderConfirmation } from './OrderConfirmation';

function setup(order: order.State) {
  const props = {
    types: doughTypes.types,
    order,
    ingredients: ingredients.ingredients
  };

  const enzymeWrapper = shallow(<OrderConfirmation {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('ChoosePizzaType', () => {
  it('should count overall price', () => {
    const order = {
      selectedType: 1,
      selectedIngredients: [1, 2]
    };

    const { enzymeWrapper } = setup(order);

    expect(/6/.test(enzymeWrapper.text())).toBeTruthy();
  });
});
