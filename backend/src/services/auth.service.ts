// Importing dependencies:
import prisma from "../lib/prisma"
import { config } from '../config/env'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

// Auth Service:
export const AuthService = {
    // logging in!
    login: async ( email: string, password: string ) => {
        // Find user:
        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                username: true,
                email: true,
                password: true,
            }
        })
        if (!user) throw new Error("Error! User not found...");
        // Compare password:
        const res = await bcrypt.compare( password, user.password);
        if (!res) throw new Error("Error! Invalid password!");
        // Creating a token:
        const payload = { id: user.id, username: user.username, email: user.email }
        return jwt.sign( payload, config.jwt_secret )
    }, 
    // Signing up:
    signup: async ( username: string, email: string, userPassword: string ) => {
        // Ensure user doesn't already exist:
        const existing = await prisma.user.findUnique({where: {email}});
        if ( existing ) throw new Error("Error! User already exists!")
        // Hash password:
        const hashed = await bcrypt.hash( userPassword, 10 )
        // Create user:
        const user = await prisma.user.create({
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
        })
        // Create payload for token:
        const payload = {
            "id": user.id,
            "username": user.username,
            "email": user.email
        }
        // Retrieve user information:
        const token = jwt.sign( payload, config.jwt_secret)
        // Create token:
        return token;
    },
}