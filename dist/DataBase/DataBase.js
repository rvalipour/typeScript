"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const typeorm_1 = require("typeorm");
const LoadEnv_1 = require("../init/LoadEnv");
const UserTable_1 = require("./UserTable");
class Database {
    constructor() {
        this.AppDataSource = new typeorm_1.DataSource({
            type: "mysql",
            host: LoadEnv_1.default.DATABASE_HOST,
            port: Number(LoadEnv_1.default.DATABASE_PORT),
            username: LoadEnv_1.default.DATABASE_USER,
            password: LoadEnv_1.default.DATABASE_PASSWORD,
            database: LoadEnv_1.default.DATABASE_NAME,
            entities: [UserTable_1.User],
            synchronize: true,
        });
        //console.log('-d-->',env.DATABASE_USER)
    }
    async init() {
        await this.AppDataSource.initialize();
    }
    getDataSource() {
        return this.AppDataSource;
    }
}
exports.default = Database;
exports.db = new Database();
