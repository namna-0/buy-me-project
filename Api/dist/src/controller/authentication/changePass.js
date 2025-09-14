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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("../../db");
const updatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const { password } = req.body;
        const user = yield db_1.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        yield db_1.prisma.user.update({
            where: { id: userId },
            data: {
                password: hashedPassword,
            },
        });
        res.status(200).json({ message: "Амжилттай шинэчиллээ" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.updatePassword = updatePassword;
//# sourceMappingURL=changePass.js.map