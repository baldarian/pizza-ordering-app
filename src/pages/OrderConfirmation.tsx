import React, { Component } from 'react';
import { connect } from 'react-redux';

import Controls from 'components/Controls';
import { ingredients, doughTypes, order, commonTypes } from 'store';

type Props = {
  ingredients: ingredients.Ingredient[];
  order: order.State;
  types: doughTypes.Dough[];
};

export class OrderConfirmation extends Component<Props> {
  render() {
    const { ingredients, order, types } = this.props;
    let price = 0;

    types.forEach(type => {
      if (type.id === order.selectedType) {
        price += type.price;
      }
    });

    ingredients.forEach(ingredient => {
      if (order.selectedIngredients.includes(ingredient.id)) {
        price += ingredient.price;
      }
    });

    return (
      <div>
        Confirm your order. Your price is {price}€
        <Controls backPath="/choose-ingredients" nextPath="/success" />
      </div>
    );
  }
}

const mapStateToProps = (state: commonTypes.State) => ({
  ingredients: state.ingredients,
  order: state.order,
  types: state.doughTypes
});

export default connect(mapStateToProps)(OrderConfirmation);
