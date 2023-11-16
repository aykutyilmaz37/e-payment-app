import { Button, Col, Row } from 'antd';
import TotalPrice from 'components/total-price';
import React from 'react';

type Props={
  callbackButton: () => void;
  callbackLoading?: boolean;
}

const CartSummary: React.FC<Props> = ({callbackButton,callbackLoading}) => {

  const handleNextStep = () => {
    callbackButton && callbackButton();
  };
  return (
    <Row>
      <Col span={24} style={{ marginBottom: 10}}>
        <TotalPrice />
      </Col>
      <Col span={24}>
        <Button type='primary' onClick={handleNextStep} loading={callbackLoading} style={{ width: '100%'}}>Payment</Button>
      </Col>
    </Row>
  );
};

CartSummary.defaultProps ={
  callbackLoading: false
}

export default CartSummary;
