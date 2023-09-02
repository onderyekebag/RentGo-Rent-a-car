import React from "react";
import UserTemplate from "../../templates/UserTemplate";
import PageHeader from "../../components/user/common/pageHeader/PageHeader";
import Spacer from "../../components/common/spacer/Spacer";
import SectionHeader from "../../components/user/common/sectionHeader/SectionHeader";
import Vehicles from "../../components/user/vehciles/Vehicles";
const VehiclesPage = () => {
  return (
    <UserTemplate>
      <PageHeader title="Vehicles" />
      <Spacer />
      <SectionHeader title1="FIND YOUR" title2="CAR" />
      <Spacer height={40} />
      <Vehicles />
      <Spacer />
    </UserTemplate>
  );
};

export default VehiclesPage;
