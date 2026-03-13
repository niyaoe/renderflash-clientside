import { NavLink, Outlet } from "react-router-dom";
import "./SettingsLayout.css";

export default function SettingsLayout() {
  return (
    <div className="rf-settings-wrapper">
      {/* TOP TABS */}
      <div className="rf-settings-topnav">
        <NavLink to="account" className="rf-settings-tab">
          Account
        </NavLink>

        <NavLink to="edit-profile" className="rf-settings-tab">
          Edit Profile
        </NavLink>

        <NavLink to="privacy" className="rf-settings-tab">
          Privacy
        </NavLink>
      </div>

      {/* CONTENT */}
      <div className="rf-settings-content">
        <Outlet />
      </div>
    </div>
  );
}
