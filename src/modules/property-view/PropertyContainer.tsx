import React from 'react';
import PropertyView from './PropertyView';
// import { LoadingView } from '../../common/components/LoadingView';

const PropertyContainer = (props:any) => {
  const {
    response,
    doc,
  } = props;
  // console.log('fromdocs',doc);
  return (
    <div>
      <PropertyView response={response} doc={doc} />
    </div>
  );
};
export default PropertyContainer;
