/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/function-component-definition */

import { getAllProperties, getProperty } from '../../../../libs/getData';
import { getDatafor } from '../../../common/helpers/gsp';
import PropertyContainer from '../../../modules/property-view/PropertyContainer';
import { propertyViewAPI } from '../../../services/api/propertyView';
import { useStore } from '../../../store';

type Params = {
  params:{
    id:string
  }
};
async function getProps(id:string) {
  const response = propertyViewAPI.fetch({ locale: 'en' });
  const data = getProperty(id);
  const { doc } = await data;
  // console.log(doc);
  // console.log(response);
  return {
    response,
    doc,
  };
}

export default async function Page({ params: { id } }:Params) {
  const { doc, response } = await getProps(id);
  // console.log('from Property page', doc);
  // console.log(doc);

  return <PropertyContainer response={response} doc={doc} />;
}

