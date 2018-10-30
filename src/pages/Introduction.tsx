import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';

const Introduction = () => {
  return (
    <div>
      Click to button to give us the details
      <div className="mt10">
        <Link to="/choose-pizza-type">
          <Button type="primary" size="large">
            Order <Icon type="right" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
