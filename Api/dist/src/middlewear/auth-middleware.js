"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticationMiddleware = (req, res, next) => {
    const Token = req.headers.authorization;
    if (!Token) {
        res.status(404).json({ message: "Unauthenticated" });
        return;
    }
    try {
        const { userId, email } = jsonwebtoken_1.default.verify(Token, process.env.JWT_SECRET);
        req.userId = userId;
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
exports.authenticationMiddleware = authenticationMiddleware;
//# sourceMappingURL=auth-middleware.js.map