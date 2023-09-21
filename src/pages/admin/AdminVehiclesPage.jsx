import React from "react";
import AdminTemplate from "../../templates/AdminTemplate";
import AdminVehicles from "../../components/admin/vehicles/AdminVehicles";

const AdminVehiclesPage = () => {
  return (
    <AdminTemplate>
      <AdminVehicles />
    </AdminTemplate>
  );
};

export default AdminVehiclesPage;
