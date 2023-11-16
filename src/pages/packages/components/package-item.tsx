import React, { useState } from 'react';
import { Flex, Typography, Space, Tag, Image } from 'antd';
import { PackageType } from 'types/packages';
import {
  StyledDetailItem,
  StyledPackageCard,
  StyledPackageCol,
  StyledPackageDivider,
} from './package-item.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { SELECTED_PACKAGES } from 'store/app/types';
import { useNavigate } from 'react-router-dom';
import { replaceImage } from 'utils/helper';

const { Text } = Typography;

type Props = {
  packageItem: PackageType;
};

const PackageItem: React.FC<Props> = ({ packageItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedPackages = useSelector(
    (state: RootState) => state.app.selectedPackages
  );
  const [isSelectedCard, setIsSelectedCard] = useState<boolean>(
    selectedPackages.find(
      (selectedPackage: PackageType) => selectedPackage.id === packageItem.id
    )
  );
  const imgPath = replaceImage(packageItem.imagePath, 'Package');

  const handleSelectPackage = (selectedPackage: PackageType) => {
    if (isSelectedCard) {
      const updatedSelectedPackages = selectedPackages.filter(
        (packageItem: PackageType) => packageItem.id !== selectedPackage.id
      );
      dispatch({
        type: SELECTED_PACKAGES,
        payload: updatedSelectedPackages,
      });
      localStorage.setItem('selectedPackages', JSON.stringify(updatedSelectedPackages))
      setIsSelectedCard(false);
    } else {
      dispatch({
        type: SELECTED_PACKAGES,
        payload: [...selectedPackages, selectedPackage],
      });
      localStorage.setItem('selectedPackages', JSON.stringify([...selectedPackages, selectedPackage]))
      setIsSelectedCard(true);
    }
  };

  const handlePackageDetail = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    navigate(`/package-detail/${packageItem.id}`);
  };

  return (
    <StyledPackageCol span={12}>
      <StyledPackageCard
        cover={
          <Image
            src={imgPath}
            alt={packageItem.name}
            preview={false}
            height={140}
          />
        }
        onClick={() => handleSelectPackage(packageItem)}
        $isSelected={isSelectedCard}
      >
        <Flex justify='space-between'>
          <Text onClick={handlePackageDetail} style={{ fontSize: 20 }} strong>
            {packageItem.name}
          </Text>
          <Text style={{ fontSize: 20 }} strong>
            {packageItem.amount} {packageItem.currency}
          </Text>
        </Flex>
        <Space>
          {packageItem.details.map((detailItem, index) => {
            return (
              <StyledDetailItem key={index} align='center'>
                <Text>{detailItem}</Text>
              </StyledDetailItem>
            );
          })}
        </Space>
        <StyledPackageDivider />
        <Space>
          {packageItem.tags.map((tagItem, index) => {
            return (
              <Tag key={index} color='gray'>
                {tagItem}
              </Tag>
            );
          })}
        </Space>
      </StyledPackageCard>
    </StyledPackageCol>
  );
};

export default PackageItem;
