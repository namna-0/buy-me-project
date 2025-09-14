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
exports.updateProfile = void 0;
const db_1 = require("../../db");
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profileId = parseInt(req.params.profileId);
    const { name, about, avatarImage, socialMediaURL, successMessage, backgroundImage, } = req.body;
    try {
        yield db_1.prisma.profile.update({
            where: { id: profileId },
            data: {
                name,
                about,
                avatarImage,
                socialMediaURL,
                successMessage,
                backgroundImage,
                updatedAt: new Date(),
            },
        });
        return res.status(200).json({ message: "amjilttai" });
    }
    catch (error) {
        return res.status(500).json({ message: "server error", error });
    }
});
exports.updateProfile = updateProfile;
//# sourceMappingURL=updAate-profile-by-id.js.map