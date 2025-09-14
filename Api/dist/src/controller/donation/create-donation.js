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
exports.CreateDonation = void 0;
const db_1 = require("../../db");
const CreateDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    const { amount, specialMessage, donorId, socialURLOrBuyMeACoffee } = req.body;
    console.log(userId);
    try {
        const donation = yield db_1.prisma.donation.create({
            data: Object.assign(Object.assign({ amount, recipientId: userId, donorId: donorId ? Number(donorId) : 1, socialURLOrBuyMeACoffee }, (specialMessage && { specialMessage })), { createdAt: new Date(), updatedAt: new Date() }),
        });
        res.status(200).json(donation);
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.CreateDonation = CreateDonation;
//# sourceMappingURL=create-donation.js.map