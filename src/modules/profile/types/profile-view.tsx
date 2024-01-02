import { Footer } from '../../../common/types/footer';
import { Navbar } from '../../../common/types/navbar';
import { Profile } from '../../../common/types/profile';

export type ProfileProps = {
  profile: Profile,
  navbar:Navbar,
  footer:Footer
};

export type ProfileContainerProps = {
  response:ProfileProps

};
