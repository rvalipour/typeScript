"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Routers_1 = require("./Routers");
class App {
    constructor(port) {
        this.port = port;
        this.app = express();
        this.router = new Routers_1.default(this.app);
        this.router.run();
    }
    run() {
        this.app.listen(this.port, () => {
            console.log(`App is listening to port ${this.port}`);
        });
    }
}
exports.default = App;
