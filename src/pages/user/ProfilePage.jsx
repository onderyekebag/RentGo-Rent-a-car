import React from "react";
import UserTemplate from "../../templates/UserTemplate";
import Profile from "../../components/user/profile/Profile";
import PageHeader from "../../components/user/common/pageHeader/PageHeader";
import Spacer from "../../components/common/spacer/Spacer";

const ProfilePage = () => {
  return (
    <UserTemplate>
      <PageHeader title="Profile" />
      <Spacer />
      <Profile />
      <Spacer />
    </UserTemplate>
  );
};

export default ProfilePage;
