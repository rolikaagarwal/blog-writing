import { useState } from "react";
import Modal from "./Modal";
import randomColor from "randomcolor";
const RecommendedTopics = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleWriteClick = (index) => {
    setSelectedTopic(index);
  };

  const handleCancelClick = () => {
    setSelectedTopic(null);
  };

  const topics = [
    {
      text: "The Importance of Establishing a Strong Online Presence for Small Businesses",
      keywords: [
        "online presence",
        "small business",
        "digital marketing",
        "branding",
      ],
    },
    {
      text: "How Fast Turnaround Times in Logo and Website Design Benefit Your Business",
      keywords: ["fast turnaround", "logo design", "web design"],
    },
    {
      text: "Affordable Branding Solutions for Startups and Entrepreneurs",
      keywords: ["affordable branding", "branding solutions"],
    },
    {
      text: "The Benefits of Comprehensive Branding Services for Small to Medium-Sized Businesses",
      keywords: [
        "Comprehensive Branding",
        "Branding Services",
        "Medium-Sized Businesses",
      ],
    },
    {
      text: "Expert Tips for Choosing the Right Digital Marketing Agency for Your Business",
      keywords: [
        "Digital Marketing",
        "Expert Tips",
        "Agency for Your Business",
      ],
    },
  ];

  return (
    <>
      <h2>Recommended Topics</h2>
      {topics.map((topic, index) => (
        <div key={index} className="recommendedTopicBox">
          {topic.text}
          <button className="write" onClick={() => handleWriteClick(index)}>
            Write
          </button>
          <ul className="keyword-list">
            {topic.keywords.map((keyword, keywordIndex) => (
              <li
                key={keywordIndex}
                className="keyword-item"
                style={{
                  color: randomColor(),
                  border: `1px solid ${randomColor()}`,
                }}
              >
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {selectedTopic !== null && (
        <Modal onCloseModal={handleCancelClick} topic={topics[selectedTopic]} />
      )}
    </>
  );
};

export default RecommendedTopics;
