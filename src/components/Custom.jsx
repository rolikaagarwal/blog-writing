import PropTypes from "prop-types";
import randomColor from "randomcolor";
import { useState } from "react";

const Custom = ({ topics, onRemoveKeyword }) => {
  const [hoveredKeyword, setHoveredKeyword] = useState(null);

  const handleMouseEnter = (keyword) => {
    setHoveredKeyword(keyword);
  };

  const handleMouseLeave = () => {
    setHoveredKeyword(null);
  };

  const handleRemoveKeyword = (topicIndex, keywordIndex) => {
    const updatedTopics = [...topics];
    const updatedKeywords = [...updatedTopics[topicIndex].keywords];
    updatedKeywords.splice(keywordIndex, 1);
    updatedTopics[topicIndex] = {
      ...updatedTopics[topicIndex],
      keywords: updatedKeywords,
    };
    onRemoveKeyword(updatedTopics);
  };
  

  return (
    <div>
      <h2>Custom Topics</h2>
      {topics.map((topic, topicIndex) => (
        <div key={topicIndex}>
          <h3>Topic {topicIndex + 1}</h3>
          <p>Topic Name: {topic.topicName}</p>
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
                    onClick={() => handleRemoveKeyword(topicIndex, keywordIndex)}
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
  onRemoveKeyword: PropTypes.func.isRequired,
};

export default Custom;
