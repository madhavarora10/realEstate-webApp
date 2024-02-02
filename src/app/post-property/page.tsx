/* eslint-disable react/function-component-definition */
/* eslint-disable import/export */

import { Footer } from '../../common/types/footer';
import { Navbar } from '../../common/types/navbar';
import { postPropertyAPI } from '../../services/api/postProperty';
import { PostProperty } from '../../common/types';
import PostPropertyContainer from '../../modules/post-property/PostPropertyContainer';

type Response = {
  postProperty:PostProperty,
  navbar:Navbar,
  footer:Footer
};

function getProps() {
  const response:Response = postPropertyAPI.fetch({ locale: 'en' });
  // console.log(response);
  return {
    response,
  };
}

export default function Page() {
  const props = getProps();
  return <PostPropertyContainer {...props} />;
}
