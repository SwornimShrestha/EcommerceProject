import React from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import PostProduct from "../../components/Admin/PostProduct";

const Admin = () => {
  return (
    <div className="flex  gap-10">
      <AdminSidebar />
      <PostProduct />
    </div>
  );
};

export default Admin;
