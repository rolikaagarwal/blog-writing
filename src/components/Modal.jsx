import { useState, useEffect } from "react";

const Modal = () => {
  const [modal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const MyModal = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [titleHistory, setTitleHistory] = useState([]);
    const [contentHistory, setContentHistory] = useState([]);

    useEffect(() => {
      const handleUndo = (e) => {
        if (e.ctrlKey && e.key === "z") {
          e.preventDefault();
          if (
            document.activeElement.id === "title" &&
            titleHistory.length > 1
          ) {
            const updatedTitleHistory = [...titleHistory];
            updatedTitleHistory.pop();
            setTitle(updatedTitleHistory[updatedTitleHistory.length - 1]);
            setTitleHistory(updatedTitleHistory);
          } else if (
            document.activeElement.id === "content" &&
            contentHistory.length > 1
          ) {
            const updatedContentHistory = [...contentHistory];
            updatedContentHistory.pop();
            setContent(updatedContentHistory[updatedContentHistory.length - 1]);
            setContentHistory(updatedContentHistory);
          }
        }
      };

      document.addEventListener("keydown", handleUndo);

      return () => {
        document.removeEventListener("keydown", handleUndo);
      };
    }, [content, contentHistory.length, title, titleHistory.length]);

    const handleTitleChange = (e) => {
      setTitle(e.target.value);
      setTitleHistory([...titleHistory, e.target.value]);
    };

    const handleContentChange = (e) => {
      setContent(e.target.value);
      setContentHistory([...contentHistory, e.target.value]);
    };

    return (
      <>
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className="modal-container">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            className="title"
            placeholder="Enter Title"
            value={title}
            onChange={handleTitleChange}
          />
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            className="content"
            name="content"
            cols={153}
            rows={80}
            placeholder="Write Post Content"
            value={content}
            onChange={handleContentChange}
          ></textarea>
          <label htmlFor="image">Image:</label>
          <div className="image-input">
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div className="image-preview">
                <img src={URL.createObjectURL(selectedImage)} alt="Preview" />
                <button onClick={removeImage}>Remove</button>
              </div>
            )}
          </div>
          <div className="generate-cancel-buttons">
            <button className="generate">Generate</button>
            <button className="cancel" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {modal && <MyModal />}
    </div>
  );
};

export default Modal;
