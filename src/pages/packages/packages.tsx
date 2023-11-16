import React from 'react';
import { Wrapper } from 'components';
import useFetchPackages from 'services/hooks/useFetchPackages';
import PackageList from './components/package-list';
import { Card, Col, Row } from 'antd';

const Packages = () => {
  const { data: packages, isLoading } = useFetchPackages({});

  return (
    <Wrapper hideContainer loading={isLoading}>
      <Row justify='center' align='top'>
        <Col>
          <Wrapper colWidth={{ xs:24, lg: 14 }} height='auto'>
            <PackageList packages={packages} />
          </Wrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Packages;
