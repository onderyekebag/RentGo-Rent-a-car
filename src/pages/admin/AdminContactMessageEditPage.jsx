import React from "react";
import AdminTemplate from "../../templates/AdminTemplate";
import ContactMessageEdit from "../../components/admin/contactMessages/ContactMessageEdit";

const AdminContactMessageEditPage = () => {
  return (
    <AdminTemplate>
      <ContactMessageEdit />
    </AdminTemplate>
  );
};

export default AdminContactMessageEditPage;
