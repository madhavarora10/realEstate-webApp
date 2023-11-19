// others
import React from 'react';
import Footer from '../../common/components/Footer';
import NavBanner from '../../common/components/navbar';
import { SignUpCard } from './components/SignUp';
import { SignViewProps } from './types/sign-view';

const SignView = (props) => {
  const {
    navbar,
    signUp,
    footer,
  }:SignViewProps = props;
  console.log(props);

  return (
    <div>
      <div className="flex w-full flex-col items-center overflow-x-hidden bg-signPageBg ">
        <NavBanner heros={navbar} />
        <div className="element__container">
          <SignUpCard heros={signUp} />
        </div>
        <Footer heros={footer} />
      </div>
    </div>
  );
};
export default SignView;
