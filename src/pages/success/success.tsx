import React, { useEffect } from 'react';
import { Wrapper } from 'components';
import { Flex, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router';
const { Text } = Typography;

const Success = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (id === undefined) {
      navigate('/');
    }
  }, []);
  return (
    <Wrapper colWidth={{ lg:7, xs:24,}} height='calc(100vh - 85px)' >
      <Flex justify='center' align='center' style={{ flexDirection: 'column' }}>
        <CheckCircleOutlined
          style={{ fontSize: 120, color: '#009C10', marginBottom: 10 }}
        />
        <Text strong style={{ fontSize: 28 }}>
          Success Completed!
        </Text>
      </Flex>
    </Wrapper>
  );
};

export default Success;
