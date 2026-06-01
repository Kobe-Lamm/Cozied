"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing router from express:
const express_1 = require("express");
// Importing controller:
const auth_controller_1 = require("../controllers/auth.controller");
// Create a new router:
const authRouter = (0, express_1.Router)();
// Logging In:
authRouter.post('/login', auth_controller_1.authController.logInController);
// Signing Up:
authRouter.post('/signup', auth_controller_1.authController.signUpController);
// Exporting router:
exports.default = authRouter;
//# sourceMappingURL=auth.route.js.map