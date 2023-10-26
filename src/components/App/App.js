import { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LoadingContext } from "../../contexts/loading.context";

import Header from "../Header";
import Home from "../Home";
import Projects from "../Projects";
import Contacts from "../Contacts";
import DynamicBg from "../DynamicBg/DynamicBg";
import AnimatedLayout from "../AnimatedLayout/AnimatedLayout";
import Footer from "../Footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  // const { loading, setLoading } = useContext(LoadingContext);

  const location = useLocation();

  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    const body = document.body;

    const onPageLoad = () => {
      preloader.classList.add("animated");
      setLoading(false);

      // After page has loaded wait 1sec, then animate

      // setTimeout(() => {
      //   preloader.classList.add("animated");
      //   setLoading(false);
      // }, 1000);
    };

    const animationEndHandler = (event) => {
      if (event.animationName === "slideOut") {
        console.log("animation end");
        body.removeAttribute("data-preloader");
      }
    };

    if (document.readyState === "complete") {
      onPageLoad();
      preloader.addEventListener("animationend", animationEndHandler);
    } else {
      window.addEventListener("load", onPageLoad);
      preloader.addEventListener("animationend", animationEndHandler);

      return () => {
        window.removeEventListener("load", onPageLoad);
        preloader.addEventListener("animationend", animationEndHandler);
      };
    }
  }, []);

  return (
    !loading && (
      <>
        <DynamicBg />
        <AnimatedLayout>
          <Header />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="projects/*" element={<Projects />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
          {location.pathname !== "/contacts" ? <Footer /> : ""}
        </AnimatedLayout>
      </>
    )
  );
};

export default App;
