import type { NextPage } from 'next';
import React from 'react';
import ContactView from './ContacttView';
import { ContactController } from './ContactController';
// import { LoadingView } from '../../common/components/LoadingView';

const ContactContainer: NextPage = (props) => (

  <div>
    <ContactController {...props}>
      <ContactView />

      {/* <LoadingView /> */}
    </ContactController>
  </div>
);

export default ContactContainer;
