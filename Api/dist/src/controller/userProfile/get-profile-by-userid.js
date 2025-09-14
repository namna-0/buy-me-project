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
exports.getProfileByUserId = void 0;
const db_1 = require("../../db");
const getProfileByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.query.userId);
    try {
        const profile = yield db_1.prisma.profile.findFirst({
            where: {
                userId: userId,
            },
        });
        res.status(200).json({ profile });
    }
    catch (error) {
        res.status(500).json({ message: "server error", error });
    }
});
exports.getProfileByUserId = getProfileByUserId;
//# sourceMappingURL=get-profile-by-userid.js.map