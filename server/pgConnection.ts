import { Pool, Client } from "pg";




export const connectToDB = async () => {
    try {
        const pool = new Pool({
            host: process.env.POSTGRES_HOST,
            user: process.env.POSTGRES_USER,
            database: process.env.POSTGRES_DB,
            password: process.env.POSTGRES_PASSWORD,
            port: parseInt(process.env.POSTGRES_PORT || "5432")
        });
        const DB_PORT = parseInt(process.env.POSTGRES_PORT || "5432");
        const DB_HOST = process.env.POSTGRES_HOST || "localhost";
        const CONNCTION_URL = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${process.env.POSTGRES_DB}`;
        console.log(CONNCTION_URL);
        console.log(process.env.POSTGRES_HOST, process.env.POSTGRES_USER, process.env.POSTGRES_DB, process.env.POSTGRES_PASSWORD, parseInt(process.env.POSTGRES_PORT || "5432"))
        await pool.connect();
        // await new Client(CONNCTION_URL).connect();
        console.log(`postgres db connected at port ${DB_PORT}`)
    } catch (err) {
        console.log("error in connection to db");
        console.log(err);
    }
};
