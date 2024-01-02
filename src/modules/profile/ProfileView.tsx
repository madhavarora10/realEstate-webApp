// others
import React from 'react';
import Footer from '../../common/components/Footer';
import NavBanner from '../../common/components/navbar';
import { ProfilePage } from './components/Profile';
import { ProfileProps } from './types/profile-view';

const ProfileView = (props) => {
  const {
    navbar,
    profile,
    footer,
  }:ProfileProps = props;
  // console.log(props);

  return (
    <div>
      <div className="flex w-full flex-col items-center overflow-x-hidden  ">
        <NavBanner heros={navbar} />
        <div className="element__container bg-F7f7FD ">
          <ProfilePage heros={profile} />
        </div>
        <Footer heros={footer} />
      </div>
    </div>
  );
};
export default ProfileView;
