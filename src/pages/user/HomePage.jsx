import React from "react";
import UserTemplate from "../../templates/UserTemplate";
import Slider from "../../components/user/home/slider/Slider";
import Spacer from "../../components/common/spacer/Spacer";
import SectionHeader from "../../components/user/common/sectionHeader/SectionHeader";
import WelcomeRent from "../../components/user/about/welcomeAbout/WelcomeRent";
import Team from "../../components/user/about/team/Team";
import NewMember from "../../components/user/home/newMemberBanner/NewMember";
import Driver from "../../components/user/about/driver/Driver";

const HomePage = () => {
  return (
    <UserTemplate>
      <Slider />
      <Spacer />
      <SectionHeader title1="Welcome to" title2="RentGo" />
      <Spacer height={25} />
      <WelcomeRent />
      <Spacer />
      <SectionHeader title1="Executive" title2="Team" />
      <Spacer height={25} />
      <Team />
      <Spacer />
      <NewMember />
      <Spacer />
      <Driver />
      <Spacer />
    </UserTemplate>
  );
};

export default HomePage;
