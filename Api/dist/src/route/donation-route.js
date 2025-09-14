"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationRouter = void 0;
const express_1 = require("express");
const create_donation_1 = require("../controller/donation/create-donation");
const get_donation_by_user_id_1 = require("../controller/donation/get-donation-by-user-id");
exports.donationRouter = (0, express_1.Router)()
    .post("/:userId", create_donation_1.CreateDonation)
    .get("/:userId", get_donation_by_user_id_1.getDonation);
//# sourceMappingURL=donation-route.js.map