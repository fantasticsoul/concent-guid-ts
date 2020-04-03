import "./runConcent";
import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./App";
import { clearContextIfHot } from "concent";

console.log("  ****** render App ******  ");
clearContextIfHot();
ReactDom.render(<App />, document.getElementById("root"));
