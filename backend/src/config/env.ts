import dotenv from 'dotenv';
dotenv.config();

export const required = ['DATABASE_URL', 'PORT', 'JWT_SECRET'];

for ( const key of required) {
    const val = process.env[key]
    if (!val) {
        throw new Error(`Missing environmental variables required! Variable: ${key}`)
    }
}

export const config = {
    jwt_secret: process.env.JWT_SECRET!,
    database_url: process.env.DATABASE_URL!,
    port: process.env.PORT!,
}