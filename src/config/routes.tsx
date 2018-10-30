import React from 'react';
import { Redirect } from 'react-router-dom';

import Introduction from 'pages/Introduction';
import ChoosePizzaType from 'pages/ChoosePizzaType';
import ChooseIngredients from 'pages/ChooseIngredients';
import OrderConfirmation from 'pages/OrderConfirmation';
import Success from 'pages/Success';

const routes = [
  {
    path: '/',
    exact: true,
    component: Introduction
  },
  {
    path: '/choose-pizza-type',
    component: ChoosePizzaType
  },
  {
    path: '/choose-ingredients',
    component: ChooseIngredients
  },
  {
    path: '/order-confirmation',
    component: OrderConfirmation
  },
  {
    path: '/success',
    component: Success
  },
  {
    component: () => {
      return <Redirect to="/" />;
    }
  }
];

export default routes;
