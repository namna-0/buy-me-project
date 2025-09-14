"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankCardRouter = void 0;
const express_1 = require("express");
const create_bankcard_1 = require("../controller/bankAccount/create-bankcard");
const get_bankcard_1 = require("../controller/bankAccount/get-bankcard");
const update_card_1 = require("../controller/bankAccount/update-card");
exports.bankCardRouter = (0, express_1.Router)()
    .post("/:userId", create_bankcard_1.CreateBankcard)
    .get("/:userId", get_bankcard_1.getBankCard)
    .put("/update/:BankCardId", update_card_1.updateBankCard);
//# sourceMappingURL=bank-card-route.js.map