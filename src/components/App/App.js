import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../../routes/Home";
import Projects from "../../routes/Projects";
import Contacts from "../../routes/Contacts";
import DynamicBg from "../DynamicBg/DynamicBg";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloader = document.querySelector(".preloader");

    const onPageLoad = () => {
      // After page has loaded wait 1sec, then animate
      setTimeout(() => {
        preloader.classList.add("animated");
        setLoading(false);
      }, 1000);
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
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home loading={loading} />} />
            <Route path="projects/*" element={<Projects />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </>
    )
  );
};

export default App;
