import React from "react";
import { render } from "react-dom";
import { MyAwesomeComponent } from "../../src";

const App = () => {
  return <MyAwesomeComponent spinnerColor="#673AB7" />;
};

render(<App />, document.getElementById("root"));
