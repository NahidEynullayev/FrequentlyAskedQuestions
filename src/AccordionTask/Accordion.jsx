import React from "react";
import "./Accordion.scss";
import Back from "../assets/Background (1).png";
import Container from "./Container/Container";
const Accordion = () => {
  return (
    <React.Fragment>
      <div className="Home">
        <img className="back" src={Back} alt="" />
        <Container />
      </div>
    </React.Fragment>
  );
};

export default Accordion;
