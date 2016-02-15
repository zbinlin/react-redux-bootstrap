"use strict";

import { combineReducers } from "redux";

import routing from "./routing";
import updateLocation from "./update-location";
import sayHello from "./say-hello";

export default combineReducers({
    routing,
    updateLocation,
    sayHello,
});
