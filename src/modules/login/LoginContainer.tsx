import React from 'react';
import LoginView from './LoginView';
import { LoginContainerProps } from './types/login-view';

const LoginContainer = (props) => {
  const {
    response,
  }:LoginContainerProps = props;
  // console.log(signUp, 'from cn');
  return (
    <div>
      <LoginView {...response} />
    </div>
  );
};
export default LoginContainer;
