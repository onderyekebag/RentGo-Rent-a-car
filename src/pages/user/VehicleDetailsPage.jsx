import React from "react";
import UserTemplate from "../../templates/UserTemplate";
import VehicleDetails from "../../components/user/vehicleDetails/VehicleDetails";
import PageHeader from "../../components/user/common/pageHeader/PageHeader";
import Spacer from "../../components/common/spacer/Spacer";
import SectionHeader from "../../components/user/common/sectionHeader/SectionHeader";

const VehicleDetailsPage = () => {
  return (
    <UserTemplate>
      <PageHeader title="Create Reservation" />
      <Spacer height={10} />
      <VehicleDetails />
    </UserTemplate>
  );
};

export default VehicleDetailsPage;
