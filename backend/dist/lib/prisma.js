"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing Prisma Client
const client_1 = require("@prisma/client");
const prisma = globalThis.prisma ?? new client_1.PrismaClient();
globalThis.prisma = prisma;
exports.default = prisma;
//# sourceMappingURL=prisma.js.map