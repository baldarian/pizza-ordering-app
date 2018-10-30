import React, { Component } from 'react';
import { Button, Row } from 'antd';
import { History } from 'history';
import { connect } from 'react-redux';

import { order } from 'store';

type Props = {
  history: History;
  resetOrder: typeof order.resetOrder;
};

export class Success extends Component<Props> {
  handleClick = () => {
    const { history, resetOrder } = this.props;

    resetOrder();
    history.push('/');
  };

  render() {
    return (
      <div>
        Success!
        <Row type="flex" justify="space-between" className="mt20">
          <Button type="primary" size="large" onClick={this.handleClick}>
            Home
          </Button>
        </Row>
      </div>
    );
  }
}

export default connect(
  null,
  { resetOrder: order.resetOrder }
)(Success);
