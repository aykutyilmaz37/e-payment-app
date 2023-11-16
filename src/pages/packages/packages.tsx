import React from 'react';
import { Wrapper } from 'components';
import useFetchPackages from 'services/hooks/useFetchPackages';
import PackageList from './components/package-list';
import { Card, Col, Row } from 'antd';

const Packages = () => {
  const { data: packages, isLoading } = useFetchPackages({});

  return (
    <Wrapper hideContainer width={14} loading={isLoading}>
      <Row justify='center' align='top' gutter={24}>
        <Col>
          <Wrapper width={24} height='auto'>
            <PackageList packages={packages} />
          </Wrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Packages;
