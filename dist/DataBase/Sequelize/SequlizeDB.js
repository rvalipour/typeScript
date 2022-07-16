"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.db = void 0;
const sequelize_1 = require("sequelize");
const LoadEnv_1 = require("../../init/LoadEnv");
class DataBase {
    constructor() {
        this.connection = new sequelize_1.Sequelize(LoadEnv_1.default.DATABASE_NAME, LoadEnv_1.default.DATABASE_USER, LoadEnv_1.default.DATABASE_PASSWORD, {
            host: LoadEnv_1.default.DATABASE_HOST,
            port: Number(LoadEnv_1.default.DATABASE_PORT),
            dialect: "mysql",
            logging: false,
            pool: {
                max: 10,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });
    }
    async init() {
        try {
            await this.connection.authenticate();
        }
        catch (error) {
            if (error instanceof Error)
                console.log(error.message);
            else
                console.log('unknown error');
        }
    }
    getConnection() {
        return this.connection;
    }
}
exports.db = new DataBase();
exports.sequelize = exports.db.getConnection();
