// React is needed to be imported to be able to write JSX
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Root = () => {
  // JSX is not valid javascript, it needs to be transpiled first
  return <div>Hello React!</div>;
};

ReactDOM.render(<Root />, document.getElementById("root"));
