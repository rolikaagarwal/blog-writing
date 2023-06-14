import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Modal = ({ onCloseModal, topic }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
    onCloseModal();
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
    const generateBlog = async (e) => {
      e.stopPropagation();
      const options = {
        method: 'GET',
        url: 'https://ai-writer1.p.rapidapi.com/text/',
        params: {
          text: topic.text
        },
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'c3bcf6c898mshcea2afab040e920p13bd99jsna61abdf738ea',
          'X-RapidAPI-Host': 'ai-writer1.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setContent(response.data.response)
      } catch (error) {
        console.error(error);
      }
  
    };
    

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
    }, [content, contentHistory, title, titleHistory]);

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
            value={topic.text}
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
            <button className="generate" onClick={generateBlog}>
              Generate
            </button>
            <button className="cancel" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  };

  return <div>{topic && <MyModal />}</div>;
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired,
};

export default Modal;
