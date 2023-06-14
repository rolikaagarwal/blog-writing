import NavbarContainer from "./components/NavbarContainer";
import RecommendedTopics from "./components/RecommendedTopics";
// import Modal from "./components/Modal";
import All from "./components/All";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<RecommendedTopics />}></Route>
          <Route path="/All" element={<All />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
