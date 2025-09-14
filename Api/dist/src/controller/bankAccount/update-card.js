"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBankCard = void 0;
const db_1 = require("../../db");
const updateBankCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BankCardId = parseInt(req.params.BankCardId);
        const { country, firstname, lastName, cardNumber, expiryDate } = req.body;
        const BankCard = yield db_1.prisma.bankcard.findUnique({
            where: { id: BankCardId },
        });
        if (!BankCard) {
            res.status(404).json({ message: "BankCard not found" });
            return;
        }
        yield db_1.prisma.bankcard.update({
            where: { id: BankCardId },
            data: {
                country,
                firstname,
                lastName,
                cardNumber,
                expiryDate: new Date(expiryDate),
                updatedAt: new Date(),
            },
        });
        res.status(200).json({ message: "Амжилттай шинэчиллээ" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.updateBankCard = updateBankCard;
//# sourceMappingURL=update-card.js.map