import React from 'react';
import ProfileView from './ProfileView';
import { ProfileContainerProps } from './types/profile-view';

const ProfileContainer = (props) => {
  const {
    response,
  }:ProfileContainerProps = props;
  // console.log(signUp, 'from cn');
  return (
    <div>
      <ProfileView {...response} />
    </div>
  );
};
export default ProfileContainer;
