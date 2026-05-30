"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing dependencies:
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuring environment variables:
dotenv_1.default.config();
// Importing from .env:
const port = process.env.PORT;
// Defining app:
const app = (0, express_1.default)();
// Setting up middlewares:
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server is running at ${port}!`);
});
//# sourceMappingURL=index.js.map