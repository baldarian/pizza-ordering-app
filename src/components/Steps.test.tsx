import React from 'react';
import { shallow } from 'enzyme';
import { Steps } from 'antd';

import OrderSteps from './Steps';

function setup() {
  const enzymeWrapper = shallow(<OrderSteps />);

  return {
    enzymeWrapper,
    steps: enzymeWrapper.find(Steps.Step)
  };
}

describe('Steps', () => {
  it('status should be set to finish', () => {
    Object.defineProperty(global.location, 'pathname', {
      writable: true,
      value: '/choose-ingredients'
    });

    const { steps } = setup();
    const secondStep = steps.at(1).props() as any;

    expect(secondStep.status).toBe('finish');
  });

  it('status should be set to process', () => {
    Object.defineProperty(global.location, 'pathname', {
      writable: true,
      value: '/choose-pizza-type'
    });

    const { steps } = setup();
    const secondStep = steps.at(1).props() as any;

    expect(secondStep.status).toBe('process');
  });

  it('status should be set to process', () => {
    Object.defineProperty(global.location, 'pathname', {
      writable: true,
      value: '/'
    });

    const { steps } = setup();
    const secondStep = steps.at(1).props() as any;

    expect(secondStep.status).toBe('wait');
  });
});
