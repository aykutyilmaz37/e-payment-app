import React from 'react';
import { Space, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { PackageType } from 'types/packages';
const { Text } = Typography;

const TotalPrice: React.FC = () => {
  const selectedPackages = useSelector(
    (state: RootState) => state.app.selectedPackages
  );

  const totalPrice = selectedPackages
  ?.map((packageItem: PackageType) => Number(packageItem.amount))
  .reduce((total:number, amount:number) => total + amount, 0)
  .toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });


  return (
    <Space>
      <Text>Total Price:</Text>
      <Text>{totalPrice} ₺</Text>
    </Space>
  );
};

export default TotalPrice;
