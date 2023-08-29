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
        desc="Oops! The page you're looking for could not be found."
      />
      <Spacer />
    </UserTemplate>
  );
};

export default UnAuthorized;
