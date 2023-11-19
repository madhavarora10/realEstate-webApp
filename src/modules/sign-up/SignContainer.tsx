import React from 'react';
import SignView from './SignView';
import { SignContainerProps } from './types/sign-view';

const SignContainer = (props) => {
  const {
    response,
  }:SignContainerProps = props;
  // console.log(signUp, 'from cn');
  return (
    <div>
      <SignView {...response} />
    </div>
  );
};
export default SignContainer;
