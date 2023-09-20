import React from "react";
import AdminTemplate from "../../templates/AdminTemplate";
import AdminReservations from "../../components/admin/reservations/AdminReservations";

const AdminReservationsPage = () => {
  return (
    <AdminTemplate>
      <AdminReservations />
    </AdminTemplate>
  );
};

export default AdminReservationsPage;
