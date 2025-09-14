"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = require("express");
const create_profile_1 = require("../controller/userProfile/create-profile");
const get_profile_by_userid_1 = require("../controller/userProfile/get-profile-by-userid");
const updAate_profile_by_id_1 = require("../controller/userProfile/updAate-profile-by-id");
exports.profileRouter = (0, express_1.Router)()
    .post("/:userId", create_profile_1.CreateProfile)
    .get("/", get_profile_by_userid_1.getProfileByUserId)
    .put("/:profileId", updAate_profile_by_id_1.updateProfile);
//# sourceMappingURL=profile-route.js.map