import React from 'react';
import { shallow } from 'enzyme';
import { doughTypes } from 'store';
import { Radio } from 'antd';

import { ChoosePizzaType } from './ChoosePizzaType';

function setup() {
  const order = {
    selectedType: 0,
    selectedIngredients: []
  };

  const props = {
    types: doughTypes.types,
    order,
    fetchDoughTypes: jest.fn(),
    updateOrder: jest.fn()
  };

  const enzymeWrapper = shallow(<ChoosePizzaType {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('ChoosePizzaType', () => {
  it('should call updateOrder when changed', () => {
    const { enzymeWrapper, props } = setup();
    const button = enzymeWrapper.find(Radio.Group);
    button.simulate('change', { target: {} });

    expect(props.updateOrder).toBeCalled();
  });

  it('should map over passed dough types and generate an appropriate radio button', () => {
    const { enzymeWrapper, props } = setup();
    const button = enzymeWrapper.find(Radio);

    expect(button.length).toBe(props.types.length);
  });
});
