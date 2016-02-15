"use strict";

import { SAY_HELLO } from "../constants";

export function sayHello(name) {
    return {
        type: SAY_HELLO,
        username: name,
    };
}
