import type { NextPage } from 'next';
import React from 'react';
import PropertiesView from './PropertiesView';
// import { LoadingView } from '../../common/components/LoadingView';

const PropertiesContainer: NextPage = (props:any) => {
  const {
    response,
  } = props;
  // console.log(props);
  return (
    <div>
      <PropertiesView {...response} />
    </div>
  );
};
export default PropertiesContainer;
