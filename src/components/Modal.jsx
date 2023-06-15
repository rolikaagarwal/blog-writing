import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Modal = ({ onCloseModal, topic }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [content, setContent] = useState("");

  const closeModal = () => {
    setSelectedImage(null);
    onCloseModal();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const generateBlog = async (e) => {
    e.stopPropagation();
    const options = {
      method: "GET",
      url: "https://ai-writer1.p.rapidapi.com/text/",
      params: {
        text: topic.text,
      },
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "c3bcf6c898mshcea2afab040e920p13bd99jsna61abdf738ea",
        "X-RapidAPI-Host": "ai-writer1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setContent(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {topic && (
        <>
          <div className="modal-wrapper" onClick={closeModal}></div>
          <div className="modal-container">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name={topic}
              className="title"
              placeholder="Enter Title"
              value={topic.text}
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
              onChange={(e) => setContent(e.target.value)}
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
                  <button onClick={()=>setSelectedImage(null)}>Remove</button>
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
      )}
    </div>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired,
};

export default Modal;
