/* eslint-disable react/function-component-definition */
/* eslint-disable import/export */

import { Footer } from '../../common/types/footer';
import { Navbar } from '../../common/types/navbar';
import { SignUp } from '../../common/types/sign-up';
import SignContainer from '../../modules/sign-up/SignContainer';
import { signUpAPI } from '../../services/api/signUp';

type Response = {
  signUp:SignUp,
  navbar:Navbar,
  footer:Footer
};

function getProps() {
  const response:Response = signUpAPI.fetch({ locale: 'en' });
  // console.log(response);
  return {
    response,
  };
}

export default function Page() {
  const props = getProps();
  return <SignContainer {...props} />;
}
