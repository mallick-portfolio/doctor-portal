import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init.js";
import useAdmin from "../../hooks/UserAdmin.js";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user?.email);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <h1 className="text-5xl text-purple-500">Dashboard</h1>
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard"}>My Appoinment</Link>
          </li>
          <li>
            <Link to={"/dashboard/review"}>My Review</Link>
          </li>
          {admin && (
            <li>
              <Link to={"/dashboard/all-users"}>All Users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
