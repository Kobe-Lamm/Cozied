"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
// Importing dependencies:
const prisma_1 = __importDefault(require("../lib/prisma"));
const env_1 = require("../config/env");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Auth Service:
exports.AuthService = {
    // logging in!
    login: async (email, password) => {
        // Find user:
        const user = await prisma_1.default.user.findUnique({
            where: { email },
            select: {
                id: true,
                username: true,
                email: true,
                password: true,
            }
        });
        if (!user)
            throw new Error("Error! User not found...");
        // Compare password:
        const res = await bcrypt_1.default.compare(password, user.password);
        if (!res)
            throw new Error("Error! Invalid password!");
        // Creating a token:
        const payload = { id: user.id, username: user.username, email: user.email };
        return jsonwebtoken_1.default.sign(payload, env_1.config.jwt_secret);
    },
    // Signing up:
    signup: async (username, email, userPassword) => {
        // Ensure user doesn't already exist:
        const existing = await prisma_1.default.user.findUnique({ where: { email } });
        if (existing)
            throw new Error("Error! User already exists!");
        // Hash password:
        const hashed = await bcrypt_1.default.hash(userPassword, 10);
        // Create user:
        const user = await prisma_1.default.user.create({
            data: {
                username: username,
                email: email,
                password: hashed,
            },
            select: {
                id: true,
                username: true,
                email: true,
            }
        });
        // Create payload for token:
        const payload = {
            "id": user.id,
            "username": user.username,
            "email": user.email
        };
        // Retrieve user information:
        const token = jsonwebtoken_1.default.sign(payload, env_1.config.jwt_secret);
        // Create token:
        return token;
    },
};
//# sourceMappingURL=auth.service.js.map