// Stores all routes.
import { Router } from 'express';

// Importing routers: 
import authRouter from './auth.route'

// Creating a new router:
const router = Router();

// Defining routes:
router.use( '/auth', authRouter )

export default router;