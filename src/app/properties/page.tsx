/* eslint-disable react/function-component-definition */
import PropertiesContainer from '../../modules/properties/PropertiesContainer';
import { propertiesAPI } from '../../services/api/properties';

function getProps() {
  const response = propertiesAPI.fetch({ locale: 'en' });
  // console.log(response);
  return {
    response,
  };
}

export default function Page() {
  const props:any = getProps();
  return <PropertiesContainer {...props} />;
}
