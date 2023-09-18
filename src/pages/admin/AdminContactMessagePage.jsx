import React from "react";
import AdminTemplate from "../../templates/AdminTemplate";
import ContactMessage from "../../components/admin/contactMessages/ContactMessage";

const AdminContactMessagePage = () => {
  return (
    <AdminTemplate>
      <ContactMessage />
    </AdminTemplate>
  );
};

export default AdminContactMessagePage;
