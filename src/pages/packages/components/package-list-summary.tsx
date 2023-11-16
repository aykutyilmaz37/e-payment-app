import { Button, Flex, message } from 'antd';
import React from 'react';
import { TotalPrice } from 'components';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const PackageListSummary: React.FC = () => {
  const selectedPackages = useSelector(
    (state: RootState) => state.app.selectedPackages
  );
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (selectedPackages.length > 0) {
      navigate('/payment');
    } else {
      message.error('Cart is empty. Please select package');
    }
  };

  return (
    <Flex justify='space-between'>
      <TotalPrice />
      <Button type='primary' onClick={handleNextStep}>
        Continue
      </Button>
    </Flex>
  );
};

export default PackageListSummary;
