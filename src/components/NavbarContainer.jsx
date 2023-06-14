import { useState } from "react";
import Form from "./Form";
const NavbarContainer = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <h1>Categories</h1>
      <div className="main-nav-box">
        <ul className="navbar-components">
          <li className="navbar-itmes">ALL</li>
          <li className="navbar-itmes">CUSTOM</li>
          <li className="navbar-itmes">ICP</li>
          <li className="navbar-itmes">MISSION</li>
          <li className="navbar-itmes">PRODUCT</li>
        </ul>
        <button onClick={handleShowForm}>ADD TOPIC</button>
      </div>
      {showForm && <Form></Form>}
    </>
  );
};
export default NavbarContainer;
