"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
exports.authController = {
    logInController: async (req, res, next) => {
        // Destructure from front end
        const { email, password } = req.body;
        try {
            const token = await auth_service_1.AuthService.login(email, password);
            res.cookie('token', token, { maxAge: 1000 * 60 * 24 * 7, httpOnly: true }); // cookie for 7 days
            return res.status(200).json({
                message: "Successfully logged in!"
            });
        }
        catch (err) {
            next(err);
        }
    },
    signUpController: async (req, res, next) => {
        // Destructure information
        const { username, email, password } = req.body;
        try {
            const token = await auth_service_1.AuthService.signup(username, email, password);
            res.cookie("token", token, { maxAge: 1000 * 60 * 24 * 7, httpOnly: true });
            return res.status(200).json({ message: "Successfully signed up!" });
        }
        catch (err) {
            next(err);
        }
    }
};
//# sourceMappingURL=auth.controller.js.map