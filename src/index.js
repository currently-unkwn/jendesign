import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import { ProjectsProvider } from "./contexts/projects.context";
import { LoadingProvider } from "./contexts/loading.context";

import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <ProjectsProvider>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </ProjectsProvider>
    </BrowserRouter>
    <GlobalStyles />
  </>
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <ProjectsProvider>
  //       <App />
  //     </ProjectsProvider>
  //   </BrowserRouter>
  //   <GlobalStyles />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
