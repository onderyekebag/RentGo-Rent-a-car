import React from "react";
import AdminTemplate from "../../templates/AdminTemplate";
import AdminEditUsers from "../../components/admin/users/AdminEditUsers";

const AdminUsersEditPage = () => {
  return (
    <AdminTemplate>
      <AdminEditUsers />
    </AdminTemplate>
  );
};

export default AdminUsersEditPage;
