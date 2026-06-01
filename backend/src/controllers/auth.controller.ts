import {Request, Response, NextFunction} from 'express'
import { AuthService } from '../services/auth.service'

export const authController = {
    logInController: async (req: Request, res: Response, next: NextFunction) => {
        // Destructure from front end
        const { email, password } = req.body;
        try {
            const token = await AuthService.login(  email, password );
            res.cookie('token', token, { maxAge: 1000 * 60 * 24 * 7, httpOnly: true }) // cookie for 7 days
            return res.status(200).json({
                message: "Successfully logged in!"
            })
        }
        catch (err) {
            next(err)
        }
    },
    signUpController: async ( req: Request, res: Response, next: NextFunction ) => {
        // Destructure information
        const { username, email, password } = req.body;
        try {
            const token = await AuthService.signup( username, email, password );
            res.cookie("token", token, {maxAge: 1000 * 60 * 24 * 7, httpOnly: true});
            return res.status(200).json({message: "Successfully signed up!"})

        } catch (err) {
            next(err)
        }
    }
}
