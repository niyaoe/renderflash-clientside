import React from "react";
import "./RenderFlashLanding.css";
import { Link } from "react-router-dom";
import TargetCursor from "../../Blits/TargetCursor";
import GradientText from "../../componentblits/GradientText";
import { useTranslation } from "react-i18next";

const RenderFlashLanding = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="rf-wrapper">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      {/* NAVBAR */}
      <header className="rf-header">
        <nav className="rf-navbar">
          <div className="rf-logo cursor-target">{t("title")}</div>

          <div className="rf-nav-right">
            <div className="rf-lang-wrapper">
              <select
                className="rf-language cursor-target"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="ar">Arabic</option>
                <option value="jn">Japanese</option>
                <option value="tl">Tamil</option>
                <option value="ml">Malayalam</option>
              </select>
            </div>

            <Link to="/login" className="rf-signin-btn cursor-target">
              {t("signin")}
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="rf-hero">
        <div className="rf-overlay"></div>

        <div className="rf-hero-content">
          <GradientText
            colors={["#621eff", "#d3c7ff"]}
            animationSpeed={7}
            showBorder={true}
            className="custom-class"
          >
            <h1 className="rf-title cursor-target">{t("hero_title")}</h1>
          </GradientText>
        </div>
      </section>
    </div>
  );
};

export default RenderFlashLanding;
