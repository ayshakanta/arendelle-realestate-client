import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashboardComponents/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex max-w-screen-xl mx-auto">
      <div className=" ">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 md:ml-64 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
