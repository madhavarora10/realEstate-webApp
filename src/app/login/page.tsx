/* eslint-disable react/function-component-definition */
/* eslint-disable import/export */

import { Footer } from '../../common/types/footer';
import { Navbar } from '../../common/types/navbar';
import { Login } from '../../common/types/login';
import LoginContainer from '../../modules/login/LoginContainer';
import { loginAPI } from '../../services/api/login';

type Response = {
  login:Login,
  navbar:Navbar,
  footer:Footer
};

function getProps() {
  const response:Response = loginAPI.fetch({ locale: 'en' });
  // console.log(response);
  return {
    response,
  };
}

export default function Page() {
  const props = getProps();
  return <LoginContainer {...props} />;
}
