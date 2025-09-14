"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const auth_route_1 = require("./route/auth-route");
const profile_route_1 = require("./route/profile-route");
const bank_card_route_1 = require("./route/bank-card-route");
const donation_route_1 = require("./route/donation-route");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/auth", auth_route_1.authRouter);
app.use("/profile", profile_route_1.profileRouter);
app.use("/bankcard", bank_card_route_1.bankCardRouter);
app.use("/donation", donation_route_1.donationRouter);
app.get("/", (req, res) => {
    res.json("connected");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map