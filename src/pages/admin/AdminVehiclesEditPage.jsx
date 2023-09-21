import React from "react";
import AdminTemplate from "../../templates/AdminTemplate";
import AdminVehicleEdit from "../../components/admin/vehicles/AdminVehicleEdit";

const AdminVehiclesEditPage = () => {
  return (
    <AdminTemplate>
      <AdminVehicleEdit />
    </AdminTemplate>
  );
};

export default AdminVehiclesEditPage;
