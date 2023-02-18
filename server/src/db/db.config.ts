
import dotenv from "dotenv";
dotenv.config({path: "./.env"});


export default {
    HOST: process.env.POSTGRES_HOST || "localhost",
    USER: process.env.POSTGRES_USER || "tol",
    PASSWORD: process.env.POSTGRES_PASSWORD || "tol19922232",
    DB: process.env.POSTGRES_DB || "tol",
    PORT: parseInt(process.env.POSTGRES_PORT || "5438"),
    DIALECT: process.env.DB_DIALECT || "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}
