import React from "react";
import UserTemplate from "../../templates/UserTemplate";
import PageHeader from "../../components/user/common/pageHeader/PageHeader";
import Spacer from "../../components/common/spacer/Spacer";
import SectionHeader from "../../components/user/common/sectionHeader/SectionHeader";
import WelcomeRent from "../../components/user/about/welcomeAbout/WelcomeRent";
import Driver from "../../components/user/about/driver/Driver";
const AboutPage = () => {
  return (
    <UserTemplate>
      <PageHeader title="About Us" />
      <Spacer />
      <SectionHeader title1="Welcome to" title2="RentGo" />
      <Spacer />
      <WelcomeRent />
      <Spacer />
      <Driver />
      <Spacer />
    </UserTemplate>
  );
};

export default AboutPage;
