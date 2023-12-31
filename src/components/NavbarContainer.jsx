import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import Form from "./Form";
import Custom from "./Custom";
import { Link } from "react-router-dom";

const NavbarContainer = () => {
  const [showForm, setShowForm] = useState(false);
  const [customTopics, setCustomTopics] = useState([]);
  const [showCustomPage, setShowCustomPage] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    setShowCustomPage(false);
  };

  const handleAddTopic = (newTopic) => {
    setCustomTopics([...customTopics, newTopic]);
    setShowForm(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleRemoveTopic = (topicIndex) => {
    const updatedTopics = [...customTopics];
    updatedTopics.splice(topicIndex, 1);
    setCustomTopics(updatedTopics);
  };

  return (
    <>
      <h1>Categories</h1>
      <div className="main-nav-box">
        <ul className="navbar-components">
          <Link to="/All">
            <li className="navbar-itmes">ALL</li>
          </Link>
          <li className="navbar-itmes" onClick={() => setShowCustomPage(true)}>
            CUSTOM
          </li>
          <li className="navbar-itmes">ICP</li>
          <Link to="/">
            <li className="navbar-itmes">MISSION</li>
          </Link>
          <li className="navbar-itmes">PRODUCT</li>
        </ul>
        <Button onClick={handleShowForm}>ADD TOPIC</Button>
      </div>
      {showCustomPage && (
        <>
          {customTopics.length === 0 ? (
            <p>No custom topics added yet.</p>
          ) : (
            <Custom topics={customTopics} onRemoveTopic={handleRemoveTopic} />
          )}
        </>
      )}
      <Modal isOpen={showForm} onClose={handleCloseForm}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Topic</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form onAddTopic={handleAddTopic} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseForm}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NavbarContainer;
