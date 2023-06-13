import NavbarContainer from "./components/NavbarContainer";
import RecommendedTopics from "./components/RecommendedTopics";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  return (
    <>
      <Modal></Modal>
      <NavbarContainer></NavbarContainer>
      <RecommendedTopics></RecommendedTopics>
    </>
  );
}

export default App;
