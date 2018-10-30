import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Row, Col } from 'antd';

import routes from 'config/routes';
import Steps from './components/Steps';

const App = () => (
  <Row type="flex" justify="center">
    <Col
      span={16}
      className="mt20"
      style={{
        textAlign: 'center',
        height: '100vh'
      }}
    >
      <Steps />
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{
          height: '100%'
        }}
      >
        {renderRoutes(routes)}
      </Row>
    </Col>
  </Row>
);

export default App;
