import React, { Component } from 'react';
import { Steps, Icon } from 'antd';

class OrderSteps extends Component {
  steps = {
    '/': 0,
    '/choose-pizza-type': 1,
    '/choose-ingredients': 2,
    '/order-confirmation': 3,
    '/success': 4
  };

  checkStepStatus = (step: number) => {
    const currentStep = this.steps[location.pathname];

    if (step < currentStep) {
      return 'finish';
    } else if (step === currentStep) {
      return 'process';
    } else {
      return 'wait';
    }
  };

  render() {
    return (
      <Steps>
        <Steps.Step
          status={this.checkStepStatus(0)}
          title="Introduction"
          icon={<Icon type="home" />}
        />
        <Steps.Step
          status={this.checkStepStatus(1)}
          title="Type"
          icon={<Icon type="branches" />}
        />
        <Steps.Step
          status={this.checkStepStatus(2)}
          title="Ingredients"
          icon={<Icon type="database" />}
        />
        <Steps.Step
          status={this.checkStepStatus(3)}
          title="Order"
          icon={<Icon type="dollar" />}
        />
        <Steps.Step
          status={this.checkStepStatus(4)}
          title="Done"
          icon={<Icon type="smile-o" />}
        />
      </Steps>
    );
  }
}

export default OrderSteps;
