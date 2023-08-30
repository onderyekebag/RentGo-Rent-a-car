import React from "react";
import UserTemplate from "../../templates/UserTemplate";
import Spacer from "../../components/common/spacer/Spacer";
import SectionHeader from "../../components/user/common/sectionHeader/SectionHeader";
import PageHeader from "../../components/user/common/pageHeader/PageHeader";
import Map from "../../components/user/contact/map/Map";
import ContactUs from "../../components/user/contact/contactUs/ContactUs";

const ContactPage = () => {
  return (
    <UserTemplate>
      <PageHeader title="Contact Us" />
      <Spacer />
      <ContactUs />
      <Spacer />
      <Map />
    </UserTemplate>
  );
};

export default ContactPage;
