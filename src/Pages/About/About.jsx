import React from "react";
import ProfileCard from "../../Blits/ProfileCard";
import "./About.css";
// import AboutPic from "../../assets/icons&images/About/AboutPhoto.jpg"

const About = () => {
  return (
    <>
    <div className="about-wrapper">
      <ProfileCard
        name="Niyas P.T"
        title="Web Developer"
        handle="niyaoe"
        status="Online"
        contactText="Contact Me"
        avatarUrl={AboutPic}
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
        behindGlowColor="rgba(125, 190, 255, 0.67)"
        iconUrl="/assets/demo/iconpattern.png"
        behindGlowEnabled
        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
      />
    </div>
    </>
  );
};

export default About;
