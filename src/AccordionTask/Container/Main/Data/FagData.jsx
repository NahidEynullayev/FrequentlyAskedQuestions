import React, { useState } from "react";

import Item from "./Item/Item";

const FagList = [
  {
    id: "difference",
    question: "What is the difference between a UI and UX Designer?",
    answer:
      "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
  },
  {
    id: "become",
    question: "How to become a UI designer?",
    answer:
      "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
  },
  {
    id: "UI",
    question: "What is the best UI design tool?",
    answer:
      "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
  },
  {
    id: "figma",
    question: "What is the best place to learn Figma?",
    answer:
      "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
  },
  {
    id: "design",
    question: "Should designers code?",
    answer:
      "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
  },
];
const FagData = () => {
  const [activeId, setActiveId] = useState(null);
  return (
    <React.Fragment>
      {FagList.map((fag) => (
        <Item
          key={fag.id}
          id={fag.id}
          question={fag.question}
          answer={fag.answer}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </React.Fragment>
  );
};

export default FagData;
