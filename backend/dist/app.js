"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing dependencies:
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// Import route:
const index_route_1 = __importDefault(require("./routes/index.route"));
// Configuring environment variables:
dotenv_1.default.config();
// Defining app:
const app = (0, express_1.default)();
// Setting up middlewares:
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use('/', () => {
    console.log("Whats up!");
});
// Routes:
app.use('/api/v1', index_route_1.default);
// Set up error handler:
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: err.message });
});
exports.default = app;
//# sourceMappingURL=app.js.map