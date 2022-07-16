"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Routers_1 = require("./Routers");
const UserRouter_1 = require("./modules/users/UserRouter");
const productRouter_1 = require("./modules/products/productRouter");
const SequlizeDB_1 = require("./DataBase/Sequelize/SequlizeDB");
class App {
    constructor(port) {
        this.port = port;
        this.app = express();
        this.routers = new Routers_1.default(this.app);
        this.routers.registerRouter(new UserRouter_1.default('users'));
        this.routers.registerRouter(new productRouter_1.default('products'));
        this.routers.run();
    }
    async run() {
        await SequlizeDB_1.db.init();
        this.app.listen(this.port, () => {
            console.log(`App is listening to port ${this.port}`);
        });
    }
}
exports.default = App;
