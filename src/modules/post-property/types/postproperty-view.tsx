import { Footer } from '../../../common/types/footer';
import { Navbar } from '../../../common/types/navbar';
import {
  PostProperty,
} from '../../../common/types/index';

export type PostPropertyViewProps = {
  postProperty: PostProperty,
  navbar:Navbar,
  footer:Footer
};

export type PostPropertyContainerProps = {
  response:PostPropertyViewProps

};
