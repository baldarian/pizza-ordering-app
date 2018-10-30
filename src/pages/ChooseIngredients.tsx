import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { connect } from 'react-redux';

import { ingredients, order, commonTypes } from 'store';
import Controls from 'components/Controls';

type Props = {
  ingredients: ingredients.Ingredient[];
  order: order.State;
  updateOrder: typeof order.updateOrder;
  fetchIngredients: typeof ingredients.fetchIngredients;
};

export class ChooseIngredients extends Component<Props> {
  onChange = (e: RadioChangeEvent) => {
    this.props.updateOrder({ selectedType: e.target.value });
  };

  componentDidMount() {
    this.props.fetchIngredients();
  }

  handleChange = (selectedIngredients: number[]) => {
    this.props.updateOrder({ selectedIngredients });
  };

  render() {
    const { ingredients, order } = this.props;

    return (
      <div>
        Choose your ingredients
        <div style={{ textAlign: 'left' }} className="mt20">
          <Checkbox.Group
            onChange={this.handleChange}
            defaultValue={order.selectedIngredients}
          >
            {ingredients.map(ingredient => (
              <div className="mt10" key={ingredient.id}>
                <Checkbox value={ingredient.id}>{ingredient.name}</Checkbox>
              </div>
            ))}
          </Checkbox.Group>
        </div>
        <Controls
          backPath="/choose-pizza-type"
          nextPath="/order-confirmation"
          isNextButtonDisabled={!order.selectedIngredients.length}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: commonTypes.State) => ({
  ingredients: state.ingredients,
  order: state.order
});

const mapDispatchToProps = {
  fetchIngredients: ingredients.fetchIngredients,
  updateOrder: order.updateOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseIngredients);
