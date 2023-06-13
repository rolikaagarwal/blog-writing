import { useState } from "react";

const RecommendedTopics = () => {
  const [selectedTopic, setselectedTopic] = useState(null);
  const handleWriteClick = (index) => {
    setselectedTopic(index);
  };
  const handleCancelClick = () => {
    setselectedTopic(null);
  };
  //   console.log(selectedTopic)
//   some default topics that will always be displayed
  const topics = [
    "The Importance of Establishing a Strong Online Presence for Small Businesses",
    "How Fast Turnaround Times in Logo and Website Design Benefit Your Business",
    "Affordable Branding Solutions for Startups and Entrepreneurs",
    "The Benefits of Comprehensive Branding Services for small to medium-Sized Business",
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

      {/* to check if any topic is selected and if it is selected then make changes or write a blog on that topic  */}
      {selectedTopic !== null && (
        <div className="writePage">
          <h3>{topics[selectedTopic]}</h3>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Content" />
          <button onClick={handleCancelClick}>Cancel</button>
          <button>Submit</button>
        </div>
      )}
    </>
  );
};

export default RecommendedTopics;
