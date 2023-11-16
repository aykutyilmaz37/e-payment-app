import { Row } from 'antd';
import React from 'react';
import { PackageType } from 'types/packages';
import CartItem from './cart-item';

type Props = {
  cartList: PackageType[];
};

const CartList: React.FC<Props> = ({ cartList }) => {
  return (
    <Row>
      {cartList.map((packageItem: PackageType) => {
        return <CartItem key={packageItem.id} cartItem={packageItem} />;
      })}
    </Row>
  );
};

export default CartList;
