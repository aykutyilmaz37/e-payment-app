import { Col, Flex, RowProps, Spin } from 'antd';
import React from 'react';
import { StyledCardContainer, StyledWrapperRow } from './wrapper.styles';

type Props = RowProps & {
  children: React.ReactElement;
  width?: number;
  height?: string;
  loading?: boolean;
  hideContainer?: boolean;
};

const Wrapper: React.FC<Props> = ({
  children,
  width,
  height,
  loading,
  hideContainer,
  ...props
}) => {
  return (
    <div {...props}>{children}</div>
  );
};

Wrapper.defaultProps = {
  loading: false,
};

export default Wrapper;
