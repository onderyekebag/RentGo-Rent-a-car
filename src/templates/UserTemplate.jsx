import React from "react";
import Header from "../components/user/common/header/Header";
import Footer from "../components/user/common/footer/Footer";

const UserTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default UserTemplate;
