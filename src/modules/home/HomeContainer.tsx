import type { NextPage } from 'next';
import React from 'react';
import HomeView from './HomeView';
// import { LoadingView } from '../../common/components/LoadingView';

const HomeContainer: NextPage = (props?:any) => {
  const {
    response,
  } = props;
  // console.log(props);
  return (
    <div>
      <HomeView {...response} />
    </div>
  );
};
export default HomeContainer;
