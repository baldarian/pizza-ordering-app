import React, { Component } from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { connect } from 'react-redux';

import Controls from 'components/Controls';
import { doughTypes, order, commonTypes } from 'store';

type Props = {
  types: doughTypes.Dough[];
  order: order.State;
  fetchDoughTypes: typeof doughTypes.fetchDoughTypes;
  updateOrder: typeof order.updateOrder;
};

export class ChoosePizzaType extends Component<Props> {
  onChange = (e: RadioChangeEvent) => {
    this.props.updateOrder({ selectedType: e.target.value });
  };

  componentDidMount() {
    this.props.fetchDoughTypes();
  }

  render() {
    const { types, order } = this.props;

    return (
      <div>
        Choose your type
        <div className="mt20">
          <Radio.Group onChange={this.onChange} value={order.selectedType}>
            {types.map(type => (
              <Radio key={type.id} value={type.id}>
                {type.name}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        <Controls
          backPath="/"
          nextPath="/choose-ingredients"
          isNextButtonDisabled={!order.selectedType}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: commonTypes.State) => ({
  types: state.doughTypes,
  order: state.order
});

const mapDispatchToProps = {
  fetchDoughTypes: doughTypes.fetchDoughTypes,
  updateOrder: order.updateOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoosePizzaType);
