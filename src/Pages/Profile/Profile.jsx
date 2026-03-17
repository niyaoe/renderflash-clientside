import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import ProfileTabs from "./ProfileTabs/ProfileTabs";
import axios from "axios";

const Profile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5002/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <div className="profile-section">
        <div className="profile-card">

          {/* Top Section */}
          <div className="outer-profile">

            <div className="profile-top">
              <img
                src={user.avatar}
                alt="profile"
                className="profile-image"
              />

              <div className="profile-info">
                <h2 className="profile-username">{user.username}</h2>

                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">5</span>
                    <span className="stat-label">Edits</span>
                  </div>

                  <div className="stat">
                    <span className="stat-number">{user.followers?.length || 0}</span>
                    <span className="stat-label">Fans</span>
                  </div>

                  <div className="stat">
                    <span className="stat-number">{user.following?.length || 0}</span>
                    <span className="stat-label">Following</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right icons */}
            <div className="profile-right">
              <Link to="/main/profile/settings" className="profile-settings-link">
                <i className="bi bi-gear-fill"></i>
              </Link>

              <Link to="/main/profile/settings/edit-profile" className="profile-settings-link">
                <i className="bi bi-pencil-square"></i>
              </Link>
              
            </div>

          </div>

          {/* Bio Section */}
          <div className="profile-bio">
            <h4 className="profile-name">{user.username}</h4>

            <p>{user.bio}</p>

            {/* softwares */}
            {user.softwares?.map((soft, index) => (
              <p key={index}>{soft}</p>
            ))}

            {/* country */}
            {user.country && <p>{user.country}</p>}
          </div>

        </div>
      </div>

      <ProfileTabs />
    </div>
  );
};

export default Profile;