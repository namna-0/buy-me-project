"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_middleware_1 = require("../middlewear/auth-middleware");
const get_me_1 = require("../controller/authentication/get-me");
const sing_in_1 = require("../controller/authentication/sing-in");
const check_username_1 = require("../controller/authentication/check-username");
const sing_up_1 = require("../controller/authentication/sing-up");
const changePass_1 = require("../controller/authentication/changePass");
exports.authRouter = (0, express_1.Router)()
    .get("/me", auth_middleware_1.authenticationMiddleware, get_me_1.getMe)
    .post("/signin", sing_in_1.signIn)
    .post("/checkname", check_username_1.checkUsername)
    .post("/signup", sing_up_1.signUp)
    .put("/update/:userId", changePass_1.updatePassword);
//# sourceMappingURL=auth-route.js.map