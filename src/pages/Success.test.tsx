import React from 'react';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';

import { Success } from './Success';

function setup() {
  const props = {
    resetOrder: jest.fn(),
    history: createMemoryHistory()
  };

  const enzymeWrapper = shallow(<Success {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Success', () => {
  it('should call resetOrder when clicked', () => {
    const { enzymeWrapper, props } = setup();
    const button = enzymeWrapper.find('Button');
    button.simulate('click');

    expect(props.resetOrder).toBeCalled();
  });
});
