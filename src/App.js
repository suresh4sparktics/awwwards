import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Route } from "react-router";
import "./styles/App.scss";

//Component
import Header from "./components/Header";
import Navigation from "./components/Navigation";

//Pages
import About from "./pages/About";
import Approach from "./pages/Approach";
import CaseStudies from "./pages/CaseStudies";
import Home from "./pages/Home";
import Services from "./pages/Services";

//Routes
const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/approach", name: "Approach", Component: Approach },
  { path: "/casestudies", name: "Case Studies", Component: CaseStudies },
  { path: "/services", name: "Services", Component: Services },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    //Preventing flash from happening
    gsap.to("body", 0, { css: { visibility: "visible" } });
    //Grab inner height of window fro mobile when dealing with vh
    let vh = dimensions.height * 0.01;
    //Set css variable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}{" "}
      </div>
      <Navigation />
    </>
  );
};

export default App;
