import { useState } from "react";
const Modal = () => {
  const [modal, setShowModal] = useState(false);
  const CloseModal = () => setShowModal(false);
  const MyModal = () => {
    return (
      <>
        <div className="modal-wrapper"></div>
        <div className="modal-container">
          <form>
            <input type="text" placeholder="Enter Title" />
            <textarea
              name="content"
              id=""
              cols="30"
              rows="10"
              placeholder="write post"
            ></textarea>
            <button className="generate">Generate</button>
            <button className="cancel" onClick={CloseModal}>
              Cancel
            </button>
          </form>
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
