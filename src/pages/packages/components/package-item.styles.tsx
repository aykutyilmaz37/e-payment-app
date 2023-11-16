import { Card, Col, Divider, Flex, Image } from 'antd';
import React from 'react';
import { styled } from 'styled-components';

type PackageCardProps = React.ComponentProps<typeof Card> & {
  $isSelected?: boolean | undefined;
};

export const StyledPackageCol = styled(Col)`
  margin-bottom: 24px;
`;

export const StyledPackageCard = styled(Card)<PackageCardProps>`
  padding: 0;
  cursor: pointer;
  display: flex;
  background: #f2f2f2;
  overflow:hidden;
  border: 2px solid ${(props) => (props.$isSelected ? '#7AC500' : '#f0f0f0')};
  .ant-card-body {
    flex: auto;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .ant-card-cover img {
    border-radius:0;
  }
`;


export const StyledDetailItem = styled(Flex)`
  &:before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: #c4c4c4;
    border: 1px solid #838383;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const StyledPackageDivider = styled(Divider)`
  margin: 10px 0px;
`;
