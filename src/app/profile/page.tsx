/* eslint-disable react/function-component-definition */
/* eslint-disable import/export */

import { Footer } from '../../common/types/footer';
import { Navbar } from '../../common/types/navbar';
import { Profile } from '../../common/types/profile';
import { profileAPI } from '../../services/api/profile';
import ProfileContainer from '../../modules/profile/ProfileContainer';

type Response = {
  profile:Profile,
  navbar:Navbar,
  footer:Footer
};

function getProps() {
  const response:Response = profileAPI.fetch({ locale: 'en' });
  // console.log(response);
  return {
    response,
  };
}

export default function Page() {
  // console.log(params);
  const props = getProps();
  return <ProfileContainer {...props} />;
}
