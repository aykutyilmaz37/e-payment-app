import React from 'react';
import { Col, Row } from 'antd';
import Header from './header';

type Props = {
  children: React.ReactElement;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Row>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

export default MainLayout;
