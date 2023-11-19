import type { NextPage } from 'next';
import React from 'react';
import AboutView from './AboutusView';
import { AboutusController } from './AboutusController';
// import { LoadingView } from '../../common/components/LoadingView';

const AboutusContainer: NextPage = (props) => (
  <div>
    <AboutusController {...props}>
      <AboutView />

      {/* <LoadingView /> */}
    </AboutusController>
  </div>
);

export default AboutusContainer;
