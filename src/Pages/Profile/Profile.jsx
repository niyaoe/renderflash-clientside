import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import ProfileTabs from "./ProfileTabs/ProfileTabs";

const Profile = () => {
  return (
    <div>
      <div className="profile-section">
        <div className="profile-card">
          {/* Top Section */}
          <div className="outer-profile">
            <div className="profile-top">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="profile"
                className="profile-image"
              />

              <div className="profile-info">
                <h2 className="profile-username">sameer_fx</h2>

                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">5</span>
                    <span className="stat-label">Edits</span>
                  </div>

                  <div className="stat">
                    <span className="stat-number">300</span>
                    <span className="stat-label">Fans</span>
                  </div>

                  <div className="stat">
                    <span className="stat-number">143</span>
                    <span className="stat-label">Following</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right icons */}
            <div className="profile-right">
              <Link
                to="/main/profile/settings"
                className="profile-settings-link"
              >
                <i className="bi bi-gear-fill"></i>
              </Link>

              <Link
                to="/main/profile/settings/edit-profile"
                className="profile-settings-link"
              >
                <i className="bi bi-pencil-square"></i>
              </Link>
            </div>
          </div>

          {/* Bio Section */}
          <div className="profile-bio">
            <h4 className="profile-name">Sameer Nalakath</h4>
            <p>Adobe AfterEffects</p>
            <p>CapCut</p>
          </div>
          {/* POSTS / SAVED TABS */}
          
        </div>
      </div>
      <ProfileTabs />
    </div>
  );
};

export default Profile;
