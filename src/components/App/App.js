import { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LoadingContext } from "../../contexts/loading.context";

import Header from "../Header";
import Home from "../../routes/Home";
import Projects from "../../routes/Projects";
import Contacts from "../../routes/Contacts";
import DynamicBg from "../DynamicBg/DynamicBg";
import AnimatedLayout from "../AnimatedLayout/AnimatedLayout";
import Footer from "../Footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  // const { loading, setLoading } = useContext(LoadingContext);

  const location = useLocation();

  useEffect(() => {
    const preloader = document.querySelector(".preloader");

    const onPageLoad = () => {
      // After page has loaded wait 1sec, then animate
      setTimeout(() => {
        preloader.classList.add("animated");
        setLoading(false);
      }, 0);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
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
          <Footer />
        </AnimatedLayout>
      </>
    )
  );
};

export default App;
