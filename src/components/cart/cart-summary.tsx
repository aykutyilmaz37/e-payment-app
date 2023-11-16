import { Button, Col, Row } from 'antd';
import TotalPrice from 'components/total-price';
import React from 'react';

type Props={
  callbackButton: () => void;
}

const CartSummary: React.FC<Props> = ({callbackButton}) => {

  const handleNextStep = () => {
    callbackButton && callbackButton();
  };
  return (
    <Row>
      <Col span={24} style={{ marginBottom: 10}}>
        <TotalPrice />
      </Col>
      <Col span={24}>
        <Button type='primary' onClick={handleNextStep} style={{ width: '100%'}}>Payment</Button>
      </Col>
    </Row>
  );
};

export default CartSummary;
