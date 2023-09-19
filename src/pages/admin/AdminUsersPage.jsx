import React from "react";
import AdminTemplate from "../../templates/AdminTemplate";
import AdminUsers from "../../components/admin/users/AdminUsers";

const AdminUsersPage = () => {
  return (
    <AdminTemplate>
      <AdminUsers />
    </AdminTemplate>
  );
};

export default AdminUsersPage;
