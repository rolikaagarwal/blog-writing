import { useState } from "react";
const Modal = () => {
  const [modal, setShowModal] = useState(false);
  const CloseModal = () => setShowModal(false);
  const MyModal = () => {
    return (
      <>
        <div className="modal-wrapper" onClick={CloseModal}></div>
        <div className="modal-container">
          <label htmlFor="title">Title : </label>
          <input type="text" className="title" placeholder="Enter Title" />
          <label htmlFor="post">Content : </label>
          <textarea
            className="post"
            name="content"
            id=""
            cols={153}
            rows={80}
            placeholder="Write Post Content"
          ></textarea>
          <div className="generate-cancel-buttons">
            <button className="generate">Generate</button>
            <button className="cancel" onClick={CloseModal}>
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>open model</button>
      {modal && <MyModal />}
      {/* <MyModal></MyModal> */}
    </div>
  );
};

export default Modal;
