import React from "react";
import UserTemplate from "../../templates/UserTemplate";
import Reservations from "../../components/user/reservationsDetails/Reservations";
import PageHeader from "../../components/user/common/pageHeader/PageHeader";
import Spacer from "../../components/common/spacer/Spacer";

const ReservationsPage = () => {
  return (
    <UserTemplate>
      <PageHeader title="Reservations" />
      <Spacer />
      <Reservations />
      <Spacer />
    </UserTemplate>
  );
};

export default ReservationsPage;
