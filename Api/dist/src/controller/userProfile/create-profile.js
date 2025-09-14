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
exports.CreateProfile = void 0;
const db_1 = require("../../db");
const CreateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    const { name, about, avatarImage, socialMediaURL, backgroundImage, successMessage, } = req.body;
    try {
        const profile = yield db_1.prisma.profile.create({
            data: {
                name,
                about,
                avatarImage,
                socialMediaURL,
                userId,
                backgroundImage,
                successMessage,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        res.status(200).json(profile);
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.CreateProfile = CreateProfile;
//# sourceMappingURL=create-profile.js.map