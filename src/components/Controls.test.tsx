import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'antd';

import Controls, { Props } from './Controls';

function setup(overrideProps: Partial<Props>) {
  const props = {
    nextPath: '',
    backPath: '',
    ...overrideProps
  };

  const enzymeWrapper = shallow(<Controls {...props} />);

  return {
    enzymeWrapper,
    nextButton: enzymeWrapper.find(Button).at(1),
    props
  };
}

describe('Controls', () => {
  it('next button should be enabled', () => {
    const { nextButton } = setup({ isNextButtonDisabled: false });
    const props = nextButton.props() as { disabled: boolean };

    expect(props.disabled).toBe(false);
  });

  it('next button should be disabled', () => {
    const { nextButton } = setup({ isNextButtonDisabled: true });
    const props = nextButton.props() as { disabled: boolean };

    expect(props.disabled).toBe(true);
  });
});
