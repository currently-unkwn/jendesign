import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../../routes/Home";
import Projects from "../../routes/Projects";
import Contacts from "../../routes/Contacts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
