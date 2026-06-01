// Importing router from express:
import {Router } from 'express';
// Importing controller:
import { authController } from '../controllers/auth.controller';

// Create a new router:
const authRouter = Router();

// Logging In:
authRouter.post( '/login', authController.logInController )
// Signing Up:
authRouter.post( '/signup', authController.signUpController )

// Exporting router:
export default authRouter;