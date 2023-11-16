import { Col, Divider, Empty, Flex, Row, Typography } from 'antd';
import Wrapper from 'components/wrapper';
import React from 'react';
import CartList from './cart-list';
import CartSummary from './cart-summary';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
const { Text } = Typography;

type Props = {
  callbackButton: () => void;
};

const Cart: React.FC<Props> = ({ callbackButton }) => {
  const selectedPackages = useSelector(
    (state: RootState) => state.app.selectedPackages
  );
  return (
    <Wrapper width={24} height='auto'>
      <Col span={24}>
        <Row>
          <Col span={24} style={{ marginBottom: 10 }}>
            <Text strong style={{ fontSize: 20 }}>
              Cart
            </Text>
          </Col>
          {selectedPackages.length > 0 ? (
            <>
              <Col span={24} style={{ marginBottom: 10 }}>
                <CartList cartList={selectedPackages} />
              </Col>
              <Col span={24}>
                <Divider />
                <CartSummary callbackButton={callbackButton} />
              </Col>
            </>
          ) : (
            <Col span={24}>
              <Flex justify='center' align='center'>
                <Empty />
              </Flex>
            </Col>
          )}
        </Row>
      </Col>
    </Wrapper>
  );
};


export default Cart;
