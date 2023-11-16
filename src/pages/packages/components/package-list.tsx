import { Col, Divider, Row } from 'antd';
import React from 'react';
import { PackageType } from 'types/packages';
import PackageItem from './package-item';
import PackageListSummary from './package-list-summary';

type Props = {
  packages: PackageType[];
};

const PackageList: React.FC<Props> = ({ packages }) => {
  return (
    <Row>
      <Col span={24} style={{ maxHeight: 500, overflow: 'auto' }}>
        <Row gutter={24}>
          {packages.map((item) => (
            <PackageItem key={item.id} packageItem={item} />
          ))}
        </Row>
      </Col>

      <Divider />
      <Col span={24}>
        <PackageListSummary />
      </Col>
    </Row>
  );
};

export default PackageList;
