"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.required = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.required = ['DATABASE_URL', 'PORT', 'JWT_SECRET'];
for (const key of exports.required) {
    const val = process.env[key];
    if (!val) {
        throw new Error(`Missing environmental variables required! Variable: ${key}`);
    }
}
exports.config = {
    jwt_secret: process.env.JWT_SECRET,
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
};
//# sourceMappingURL=env.js.map