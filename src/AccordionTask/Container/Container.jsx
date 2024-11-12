import React from "react";
import "./Container.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
const Container = () => {
  return (
    <React.Fragment>
      <div className="Container">
        <Header />
        <Main />
      </div>
    </React.Fragment>
  );
};

export default Container;
