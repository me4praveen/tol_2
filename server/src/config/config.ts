export default {
  "development": {
    "username": process.env.POSTGRES_USER || "tol",
    "password": process.env.POSTGRES_PASSWORD || "tol19922232",
    "database": process.env.POSTGRES_DB || "tol",
    "host": process.env.POSTGRES_HOST || "localhost",
    "dialect": process.env.DB_DIALECT || "postgres",
    "port": process.env.POSTGRES_PORT || 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
