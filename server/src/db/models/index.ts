
import { Sequelize } from 'sequelize';
import DB_CONFIG from "../../config/config"

const env = process.env.NODE_ENV || 'development';
const config = (DB_CONFIG as any)[env];
console.log(config);

const sequelize = config.url
    ? new Sequelize(config.url, config)
    : new Sequelize(config.database, config.username, config.password, config);

export { Sequelize, sequelize };