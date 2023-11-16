import React, { useState } from 'react';
import SignupForm from './components/signup-form';
import { Wrapper } from 'components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LOGIN } from 'store/app/types';
import {  message } from 'antd';
import { UserType } from 'types/user';
import useMutateSignup from 'services/hooks/useMutateSignup';


const Signup: React.FC = () => {
  const [formValues, setFormValues] = useState<UserType | null>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutateSignup({
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

  return (
    <Wrapper colWidth={{  xs:24,lg:7 }} height='calc(100vh - 85px)' gutter={12}>
       <SignupForm onFinish={onFinish} loading={isLoading}  />
    </Wrapper>
  );
};

export default Signup;
