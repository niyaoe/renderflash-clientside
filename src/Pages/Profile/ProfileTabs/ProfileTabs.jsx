import { NavLink, Outlet } from "react-router-dom";
import "./ProfileTabs.css";

export default function ProfileTabs() {
  return (
    <div className="rf-profile-tabs-container">
      
      {/* Tabs */}
      <div className="rf-profile-tabs">
        <NavLink
          to="posts"
          className={({ isActive }) =>
            isActive ? "rf-tab rf-tab-active" : "rf-tab"
          }
        >
          Your Edits
        </NavLink>

        <NavLink
          to="saved"
          className={({ isActive }) =>
            isActive ? "rf-tab rf-tab-active" : "rf-tab"
          }
        >
          Saved
        </NavLink>
      </div>

      {/* Nested content */}
      <div className="rf-profile-tab-content">
        <Outlet />
      </div>

    </div>
  );
}