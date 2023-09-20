import React from "react";
import AdminTemplate from "../../templates/AdminTemplate";
import AdminReservationEdit from "../../components/admin/reservations/AdminReservationEdit";

const AdminReservationsEditPage = () => {
  return (
    <AdminTemplate>
      <AdminReservationEdit />
    </AdminTemplate>
  );
};

export default AdminReservationsEditPage;
