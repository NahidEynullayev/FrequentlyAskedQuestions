import React from "react";
import "./Item.scss";
import down from "../../../../../assets/Down.png";
import up from "../../../../../assets/Down (1).png";
const Item = ({ id, question, answer, activeId, setActiveId }) => {
  const IsOpen = id === activeId;
  const toggleFAG = () => {
    setActiveId(IsOpen ? null : id);
  };
  const toggleAnswer = () => {
    setActiveId(null);
  };

  return (
    <React.Fragment>
      <ul>
        <li
          className={`fag ${IsOpen ? "open" : ""}`}
          style={{ borderRadius: IsOpen ? "8px 8px 0 0" : "8px" }}
        >
          <div className="question">
            <p>{question}</p>
            <button onClick={toggleFAG}>
              <img src={IsOpen ? up : down} alt="arrow" />
            </button>
          </div>
          {IsOpen && (
            <div className="answer" style={{ borderRadius: "0 0 8px 8px" }}>
              <p>{answer}</p>
              <button onClick={toggleAnswer}>
                <p>Learn More</p>
              </button>
            </div>
          )}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Item;
