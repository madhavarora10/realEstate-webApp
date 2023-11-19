import { Footer } from '../../../common/types/footer';
import { Navbar } from '../../../common/types/navbar';
import {
  SignUp,
} from '../../../common/types/sign-up';

export type SignContainerProps = {
  response:{
    signUp: SignUp,
    navbar:Navbar,
    footer:Footer
  }

};
export type SignViewProps = {
  signUp: SignUp,
  navbar:Navbar,
  footer:Footer
};
