import { useState } from "react";
import Modal from "./Modal";

const RecommendedTopics = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleWriteClick = (index) => {
    setSelectedTopic(index);
  };

  const handleCancelClick = () => {
    setSelectedTopic(null);
  };

  const topics = [
    "The Importance of Establishing a Strong Online Presence for Small Businesses",
    "How Fast Turnaround Times in Logo and Website Design Benefit Your Business",
    "Affordable Branding Solutions for Startups and Entrepreneurs",
    "The Benefits of Comprehensive Branding Services for Small to Medium-Sized Businesses",
    "Expert Tips for Choosing the Right Digital Marketing Agency for Your Business",
  ];

  return (
    <>
      <h2>Recommended Topics</h2>
      {topics.map((topic, index) => (
        <div key={index} className="recommendedTopicBox">
          {topic}
          <button className="write" onClick={() => handleWriteClick(index)}>
            Write
          </button>
        </div>
      ))}
      {selectedTopic !== null && (
        <Modal onCloseModal={handleCancelClick} topic={topics[selectedTopic]} />
      )}
    </>
  );
};

export default RecommendedTopics;
