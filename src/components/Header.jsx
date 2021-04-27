import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import gsap from "gsap";

const tl = gsap.timeline();

const Header = ({ dimensions }) => {
  const [menuState, setMenuState] = useState({
    menuOpened: false,
  });

  useEffect(() => {
    if (menuState.menuOpened === true) {
      //Run open menu animation
      gsap.to("nav", { css: { display: "block" } });
      gsap.to("body", { css: { overflow: "hidden" } });
      tl.to(".App", {
        duration: 1,
        y: dimensions.width <= 654 ? "70vh" : dimensions.height / 2,
        ease: "expo.inOut",
      })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        });
    } else {
      //Run close menu animation
    }
  });
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">AGENCY.</a>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
