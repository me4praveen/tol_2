import config from '../db.config';
import { Dialect, Sequelize } from 'sequelize';

console.log(config)
console.log(process.env.POSTGRES_PORT)
export const sequelize = new Sequelize(
    config.DB, 
    config.USER, 
    config.PASSWORD, 
    {
        host: config.HOST,
        port: config.PORT,
        dialect: config.DIALECT as Dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    });

    

