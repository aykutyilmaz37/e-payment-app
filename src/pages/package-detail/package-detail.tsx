import React from 'react';
import {
  Button,
  Col,
  Flex,
  Row,
  Space,
  Typography,
  Image,
  Tag,
  Card,
} from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import { Cart, Wrapper } from 'components';
import { useNavigate, useParams } from 'react-router';
import useFetchPackages from 'services/hooks/useFetchPackages';
import { PackageType } from 'types/packages';
import { replaceImage } from 'utils/helper';
const { Text, Paragraph } = Typography;

const PackageDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const { data: packageDetailData, isLoading } = useFetchPackages({});
  if (!packageDetailData) return null;

  const handleBack = () => {
    navigate(-1);
  };
  const handleGoToPayment = () =>{
    navigate('/payment')
  }

  const packageDetail: PackageType = packageDetailData?.find(
    (packageItem: PackageType) => packageItem.id === id
  );
  const imgPath = replaceImage(packageDetail.imagePath, 'Package', '1000x300');

  return (
    <Wrapper hideContainer loading={isLoading} >
      <Row justify='center' align='top' gutter={24}>
        <Col lg={12} xs={24}>
          <Wrapper colWidth={{ span:24 }} height='auto'>
            <Col span={24}>
              <Row>
                <Col span={24} style={{ marginBottom: 24 }}>
                  <Space>
                    <Button
                      type='primary'
                      onClick={handleBack}
                      icon={<CaretLeftOutlined />}
                    >
                      Back
                    </Button>
                    <Text strong style={{ fontSize: 20 }}>
                      {packageDetail.name}
                    </Text>
                    <Text strong style={{ fontSize: 20 }}>
                      {' '}
                      |{' '}
                    </Text>
                    <Text strong style={{ fontSize: 20 }}>
                      {packageDetail.amount}
                      {packageDetail.currency}
                    </Text>
                  </Space>
                </Col>
                <Col span={24} style={{ marginBottom: 24 }}>
                  <Image src={imgPath} preview={false} />
                </Col>
                <Col span={24} style={{ marginBottom: 24 }}>
                  <Flex justify='space-between'>
                    <Text strong style={{ fontSize: 20 }}>
                      Detail
                    </Text>
                    <Space>
                      {packageDetail.tags.map((tagItem, index) => {
                        return (
                          <Tag key={index} color='gray'>
                            {tagItem}
                          </Tag>
                        );
                      })}
                    </Space>
                  </Flex>
                </Col>
                <Col span={24}>
                  <Card>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla id arcu ultricies, hendrerit turpis ac, semper
                      justo. Nam orci odio, semper id mauris nec, ornare luctus
                      elit. Orci varius natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus. Mauris eu justo
                      sapien. Nullam turpis magna, laoreet at finibus sit amet,
                      ultrices et dolor. Suspendisse vestibulum gravida quam,
                      nec interdum justo pulvinar nec. Aenean quam mauris,
                      fermentum eu iaculis non, egestas a lorem.
                    </Paragraph>
                    <Paragraph>
                      Sed ante justo, pulvinar dapibus enim id, euismod feugiat
                      arcu. Mauris dictum sed tortor ut placerat. Sed leo ante,
                      laoreet at egestas ut, dapibus et turpis. Duis non enim
                      sed ante aliquet maximus eu et dui. Sed consequat iaculis
                      libero, id pharetra purus blandit vitae. Etiam ut lobortis
                      tortor, sed efficitur tortor. Duis facilisis quam sem,
                      quis pulvinar erat aliquet sit amet. Aliquam velit orci,
                      pellentesque eget varius finibus, sodales quis dolor.
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Wrapper>
        </Col>
        <Col lg={6} xs={24}>
          <Cart callbackButton={handleGoToPayment} />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default PackageDetail;
