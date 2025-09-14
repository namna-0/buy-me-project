"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
exports.default = {
    // earlyAccess: true, // Removed as it is not part of PrismaConfig
    schema: node_path_1.default.join("prisma", "schema.prisma"),
};
//# sourceMappingURL=prisma.config.js.map