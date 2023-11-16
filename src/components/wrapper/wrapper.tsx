import { Col, Flex, RowProps, Spin } from 'antd';
import React from 'react';
import { StyledCardContainer, StyledWrapperRow } from './wrapper.styles';

type Props = RowProps & {
  children: React.ReactElement;
  colWidth?: Object;
  height?: string;
  loading?: boolean;
  hideContainer?: boolean;
};

const Wrapper: React.FC<Props> = ({
  children,
  colWidth,
  height,
  loading,
  hideContainer,
  ...props
}) => {
  return (
    <StyledWrapperRow
      align='middle'
      justify='center'
      style={{ height: `${height ? height : 'auto'}` }}
      {...props}
    >
      <Col {...colWidth}>
        {loading ? (
          <Flex
            justify='center'
            align='center'
            style={{ height: 'calc(100vh - 85px)' }}
          >
            <Spin />
          </Flex>
        ) : hideContainer ? (
          children
        ) : (
          <StyledCardContainer>{children}</StyledCardContainer>
        )}
      </Col>
    </StyledWrapperRow>
  );
};

Wrapper.defaultProps = {
  loading: false,
  colWidth: {
    span: 24,
  },
};

export default Wrapper;
