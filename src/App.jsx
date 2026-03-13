import React from "react";
import LandingPage from "./Pages/LandingPage/RenderFlashLanding";
import RenderFlashLogin from "./Pages/LoginPage/RenderFlashLogin";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./Pages/About/About";
import Feed from "./Pages/Feed_Section/Feed/Feed";
import RenderFlashLayout from "./Pages/Feed_Section/Layout/RenderFlashLayout";
import Search from "./Pages/Feed_Section/Search/Search";
import GlobalChat from "./Pages/Feed_Section/Chat/GlobalChat";
import Profile from "./Pages/Profile/Profile";
import SettingsLayout from "./Pages/Settings/SettingsLayout/SettingsLayout";
import AccountSettings from "./Pages/Settings/AccountInfo/AccountSettings";
import EditProfile from "./Pages/Settings/EditProfile/EditProfile";
import PrivacySettings from "./Pages/Settings/PrivacySettings/PrivacySettings";
import ChangePassword from "./Pages/Settings/Change Password/ChangePassword";
import Notifications from "./Pages/Notification/Notifications";
import YourPosts from "./Pages/Profile/YourPosts/YourPosts";
import SavedPosts from "./Pages/Profile/SavedPosts/SavedPosts";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<RenderFlashLogin />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/about" element={<About />} />

            <Route path="/main" element={<RenderFlashLayout />}>
              <Route index element={<Feed />} />
              <Route path="feed" element={<Feed />} />
              <Route path="search" element={<Search />} />
              <Route path="chat" element={<GlobalChat />} />
              <Route path="profile" element={<Profile />}>
                <Route index element={<Navigate to="posts" />} />
                <Route path="posts" element={<YourPosts />} />
                <Route path="saved" element={<SavedPosts />} />
              </Route>
              <Route path="notifications" element={<Notifications />} />
              <Route
                path="main/profile/settings/edit-profile"
                element={<EditProfile />}
              />

              <Route path="/main/profile/settings" element={<SettingsLayout />}>
                <Route index element={<AccountSettings />} />
                <Route path="account" element={<AccountSettings />} />
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="privacy" element={<PrivacySettings />} />

                <Route path="change-password" element={<ChangePassword />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
