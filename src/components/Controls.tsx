import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Row } from 'antd';

export type Props = {
  backPath: string;
  nextPath: string;
  isNextButtonDisabled?: boolean;
};

const Controls = (props: Props) => (
  <Row type="flex" justify="space-between" className="mt20">
    <Link to={props.backPath}>
      <Button type="primary" size="large">
        <Icon type="left" /> Back
      </Button>
    </Link>
    <Link to={props.nextPath}>
      <Button type="primary" size="large" disabled={props.isNextButtonDisabled}>
        Next
        <Icon type="right" />
      </Button>
    </Link>
  </Row>
);

export default Controls;
