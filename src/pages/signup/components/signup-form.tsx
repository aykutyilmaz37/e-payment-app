import React from 'react';
import { Button, Form, Input } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import UserType from 'types/user';

type Props ={
  onFinish: (values:UserType) => any;
  loading: boolean;
}

const SignupForm: React.FC<Props> = ({ onFinish, loading }) => {
 

  return (
    <Form
      name='signup'
      layout={'vertical'}
      onFinish={onFinish}
      autoComplete='off'
    >
      <Form.Item
        label='Full Name'
        name='fullName'
        rules={[{ required: true, message: 'Please input your full name!' }]}
      >
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            type: 'email',
            message: 'The input is not valid email!',
          },
          { required: true, message: 'Please input your email!' },
        ]}
      >
        <Input prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' loading={loading} style={{ width:'100%'}}>
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
