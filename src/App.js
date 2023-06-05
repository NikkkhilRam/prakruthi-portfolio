import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/about.scss";
import "./styles/experience.scss";
import "./styles/skills.scss";
import "./styles/projects.scss";
import "./styles/activities.scss";
import "./styles/footer.scss";

import "./styles/app.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
