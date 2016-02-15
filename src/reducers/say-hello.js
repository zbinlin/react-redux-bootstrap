"use strict";

import {
    SAY_HELLO,
} from "../constants";

export default function sayHello(state = {}, action) {
    switch (action.type) {
        case SAY_HELLO:
            return Object.assign({}, state, {
                username: action.username,
            });
        default:
            return state;
    }
}
