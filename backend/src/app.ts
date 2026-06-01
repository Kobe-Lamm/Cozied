// Importing dependencies:
import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

// Import route:
import router from './routes/index.route'

// Configuring environment variables:
dotenv.config();

// Defining app:
const app: Application = express();

// Setting up middlewares:
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', ()=>{
    console.log("Whats up!")
})

// Routes:
app.use('/api/v1', router)

// Set up error handler:
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    console.error(err.message);
    res.status(500).json({message: err.message})
})

export default app