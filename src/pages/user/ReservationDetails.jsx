import React from "react";
import UserTemplate from "../../templates/UserTemplate";
import PageHeader from "../../components/user/common/pageHeader/PageHeader";
import Spacer from "../../components/common/spacer/Spacer";
import ReservationDetails from "../../components/user/reservationsDetails/ReservationDetails";

const ReservationDetailsPage = () => {
  return (
    <UserTemplate>
      <PageHeader title="Reservation Details" />
      <Spacer />
      <ReservationDetails />
      <Spacer />
    </UserTemplate>
  );
};

export default ReservationDetailsPage;
