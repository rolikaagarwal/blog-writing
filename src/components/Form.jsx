import { useState } from "react";
import "./Form.css";
import PropTypes from "prop-types";

const Form = ({ onAddTopic }) => {
  const [topicName, setTopicName] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleAddKeyword = () => {
    if (currentKeyword.trim() !== "") {
      setKeywords([...keywords, currentKeyword.trim()]);
      setCurrentKeyword("");
    }
  };

  const handleKeywordInputChange = (e) => {
    setCurrentKeyword(e.target.value);
  };

  const handleKeywordInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddKeyword();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTopic = {
      topicName,
      keywords,
    };
    onAddTopic(newTopic);
    setTopicName("");
    setKeywords([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Topic Name"
          value={topicName}
          className="input-topic-field"
          onChange={(e) => setTopicName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Keywords"
          className="input-keyword-field"
          value={currentKeyword}
          onChange={handleKeywordInputChange}
          onKeyDown={handleKeywordInputKeyDown}
        />
        <button
          type="button"
          className="add-keyword"
          onClick={handleAddKeyword}
        >
          Add Keyword
        </button>
        <ul>
          {keywords.map((keyword, index) => (
            <li key={index} className="keyword-item">
              {keyword}
            </li>
          ))}
        </ul>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onAddTopic: PropTypes.func.isRequired,
};

export default Form;
