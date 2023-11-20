// others
import React from 'react';
import Footer from '../../common/components/Footer';
import NavBanner from '../../common/components/navbar';
import { LoginCard } from './components/Login';
import { LoginViewProps } from './types/login-view';

const LoginView = (props) => {
  const {
    navbar,
    login,
    footer,
  }:LoginViewProps = props;
  // console.log(props);

  return (
    <div>
      <div className="flex w-full flex-col items-center overflow-x-hidden bg-signPageBg ">
        <NavBanner heros={navbar} />
        <div className="element__container">
          <LoginCard heros={login} />
        </div>
        <Footer heros={footer} />
      </div>
    </div>
  );
};
export default LoginView;
