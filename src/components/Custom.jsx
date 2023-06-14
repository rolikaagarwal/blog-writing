import PropTypes from "prop-types";
import randomColor from "randomcolor";
import { useState } from "react";
import "./Custom.css";

const Custom = ({ topics, onRemoveTopic }) => {
  const [hoveredKeyword, setHoveredKeyword] = useState(null);

  const handleMouseEnter = (keyword) => {
    setHoveredKeyword(keyword);
  };

  const handleMouseLeave = () => {
    setHoveredKeyword(null);
  };

  const handleRemoveTopic = (topicIndex) => {
    const updatedTopics = [...topics];
    updatedTopics.splice(topicIndex, 1);
    onRemoveTopic(updatedTopics);
  };

  const handleRemoveKeyword = (topicIndex, keywordIndex) => {
    const updatedTopics = [...topics];
    const updatedKeywords = [...updatedTopics[topicIndex].keywords];
    updatedKeywords.splice(keywordIndex, 1);
    updatedTopics[topicIndex] = {
      ...updatedTopics[topicIndex],
      keywords: updatedKeywords,
    };
    onRemoveTopic(updatedTopics);
  };

  return (
    <div>
      <h2>Custom Topics</h2>
      {topics.map((topic, topicIndex) => (
        <div className="custom-topic-container" key={topicIndex}>
          <div className="upper-header">
            <p>{topic.topicName}</p>
            <button
              type="button"
              className="delete-button"
              onClick={() => handleRemoveTopic(topicIndex)}
            >
              DELETE
            </button>
          </div>
          <ul className="keyword-list">
            {topic.keywords.map((keyword, keywordIndex) => (
              <li
                key={keywordIndex}
                className="keyword-item"
                style={{
                  color: randomColor(),
                  border: `1px solid ${randomColor()}`,
                }}
                onMouseEnter={() => handleMouseEnter(keyword)}
                onMouseLeave={handleMouseLeave}
              >
                {keyword}
                {hoveredKeyword === keyword && (
                  <span
                    className="remove-icon"
                    onClick={() =>
                      handleRemoveKeyword(topicIndex, keywordIndex)
                    }
                  >
                    &#10006;
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

Custom.propTypes = {
  topics: PropTypes.array.isRequired,
  onRemoveTopic: PropTypes.func.isRequired,
};

export default Custom;
