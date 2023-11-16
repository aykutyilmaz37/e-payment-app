import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LOGIN } from 'store/app/types';
import { Button, Form, Input, message } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { UserType } from 'types/user';
import useMutateSignup from 'services/hooks/useMutateSignup';

const SignupForm: React.FC = () => {
  const [formValues, setFormValues] = useState<UserType | null>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate: signup } = useMutateSignup({
    onSuccess: (data) => {
      if (data.message === 'Signup completed!') {
        dispatch({
          type: LOGIN,
          payload: formValues,
        });
        localStorage.setItem('user', window.btoa(JSON.stringify(formValues)));
        navigate('/');
        setFormValues(null);
        message.success('Success');
      } else {
        message.error('Login failed');
      }
    },
  });

  const onFinish = async (values: any) => {
    setFormValues(values);
    await signup(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error(errorInfo);
  };

  return (
    <Form
      name='signup'
      layout={'vertical'}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
          { required: true, message: 'Please input your password!' },
        ]}
      >
        <Input prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' style={{ width:'100%'}}>
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
