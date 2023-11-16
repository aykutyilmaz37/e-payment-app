import React from 'react';
import { Col, Flex, Typography } from 'antd';
import { PackageType } from 'types/packages';
import StyledCartItem from './cart-item.styles';
import { useNavigate } from 'react-router';
const { Text } = Typography;

type Props = {
  cartItem: PackageType;
};

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const navigate = useNavigate();
  const handlePackageDetail = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    navigate(`/package-detail/${cartItem.id}`);
  };

  return (
    <Col span={24} style={{ marginBottom: 12 }}>
      <StyledCartItem onClick={handlePackageDetail}>
        <Flex justify='space-between' align='center'>
          <Text>{cartItem.name}</Text>
          <Text strong>
            {cartItem.amount} {cartItem.currency}
          </Text>
        </Flex>
      </StyledCartItem>
    </Col>
  );
};

export default CartItem;
