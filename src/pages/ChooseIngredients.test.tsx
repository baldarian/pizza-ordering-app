import React from 'react';
import { shallow } from 'enzyme';
import { ingredients } from 'store';
import { Checkbox } from 'antd';

import { ChooseIngredients } from './ChooseIngredients';

function setup() {
  const order = {
    selectedType: 0,
    selectedIngredients: []
  };

  const props = {
    ingredients: ingredients.ingredients,
    order,
    fetchIngredients: jest.fn(),
    updateOrder: jest.fn()
  };

  const enzymeWrapper = shallow(<ChooseIngredients {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('ChooseIngredients', () => {
  it('should call updateOrder when checked', () => {
    const { enzymeWrapper, props } = setup();
    const checkboxGroup = enzymeWrapper.find(Checkbox.Group);
    checkboxGroup.simulate('change', { target: {} });

    expect(props.updateOrder).toBeCalled();
  });

  it('should map over passed ingredients and generate an appropriate checkbox', () => {
    const { enzymeWrapper, props } = setup();
    const button = enzymeWrapper.find(Checkbox);

    expect(button.length).toBe(props.ingredients.length);
  });
});
