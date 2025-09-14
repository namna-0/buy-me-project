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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const db_1 = require("../../db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email, username } = req.body;
    try {
        const existingEmail = yield db_1.prisma.user.findFirst({
            where: { email },
        });
        if (existingEmail) {
            res.status(400).json({ message: "Имэйл бүртгэлтэй байна" });
            return;
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = yield db_1.prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                email,
            },
        });
        const { password: userPassword } = newUser, userWithoutPassword = __rest(newUser, ["password"]);
        const token = jsonwebtoken_1.default.sign({ userId: newUser.id, email: newUser.email }, process.env.JWT_SECRET);
        res.status(200).json({ user: userWithoutPassword, token });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.signUp = signUp;
//# sourceMappingURL=sing-up.js.map