"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../lib/prisma"));
async function main() {
    const user = await prisma_1.default.user.create({
        data: {
            username: "test",
            email: "test@gmail.com",
            hashedPassword: "123"
        },
    });
    console.log(user);
}
main()
    .catch(console.error);
//# sourceMappingURL=testPrisma.js.map