// Importing dependencies:
import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Configuring environment variables:
dotenv.config();

// Importing from .env:
const port = process.env.PORT

// Defining app:
const app: Application = express();

// Setting up middlewares:
app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Server is running at ${port}!`)
})