import React from "react";
import UserTemplate from "../../templates/UserTemplate";
import NotFound from "../../components/common/notFound/NotFound";
import Spacer from "../../components/common/spacer/Spacer";

const UnAuthorized = () => {
  return (
    <UserTemplate>
      <Spacer />
      <NotFound
        ops="3"
        desc="Sorry, but you don't have permission to access this resource. Please make sure you have the proper credentials and try again"
      />
      <Spacer />
    </UserTemplate>
  );
};

export default UnAuthorized;
