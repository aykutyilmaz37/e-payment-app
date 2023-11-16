import React from 'react';
import SignupForm from './components/signup-form';
import { Wrapper } from 'components';

const Signup: React.FC = () => {
  return (
    <Wrapper width={7} height='calc(100vh - 85px)'>
       <SignupForm />
    </Wrapper>
  );
};

export default Signup;
