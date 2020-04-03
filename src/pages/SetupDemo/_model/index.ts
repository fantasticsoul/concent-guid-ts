import state from "./state";
import * as reducer from "./reducer";
import * as computed from "./computed";
import * as watch from "./watch";
import { configure } from "concent";

console.log('configure("SetupDemo"');
configure("SetupDemo", { state, reducer, computed, watch });