import React from "react";
import SideBar from "../../components/Admin/SideBar";
import NavBar from "../../components/Admin/NavBar";
import DashBoardComponent from "../../components/Admin/DashBoardComponent";
import UseAdminRouteProtect from "../../components/Admin/AdminRoteProtectHook";

function AdminDashBoard() {

  // coustom hook for route Protecting
  UseAdminRouteProtect()

  return (
    <div className="w-full h-full flex">
        <SideBar />
      <div className="bg-white w-full">
        <NavBar />
        <DashBoardComponent />
      </div>
    </div>
  );
}

export default AdminDashBoard;
