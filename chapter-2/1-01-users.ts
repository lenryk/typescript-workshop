/// <reference path = "./types/AuthTypes.d.ts" />
import auth = require("AuthTypes");

// assing new type to variable
let jon: auth.User

// assign data to our new variable type
jon = {
    email: "jon@snow.com",
    roles: ["admin"]
};

let alice: auth.User;
alice = {
    email: "alice@snow.com",
    roles: ["super_admin"],
    source: "facebook"
};