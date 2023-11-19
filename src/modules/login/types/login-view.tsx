import { Footer } from '../../../common/types/footer';
import { Navbar } from '../../../common/types/navbar';
import {
  Login,
} from '../../../common/types/login/index';

export type LoginViewProps = {
  login: Login,
  navbar:Navbar,
  footer:Footer
};

export type LoginContainerProps = {
  response:LoginViewProps

};
