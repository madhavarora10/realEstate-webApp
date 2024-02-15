/* eslint-disable react/function-component-definition */
/* eslint-disable import/export */

import HomeContainer from '../modules/home/HomeContainer';
import { homeAPI } from '../services/api/home';

function getProps() {
  const response = homeAPI.fetch({ locale: 'en' });
  // console.log(response);
  return {
    response,
  };
}

export default function Page() {
  const props:any = getProps();
  return <HomeContainer {...props} />;
}
