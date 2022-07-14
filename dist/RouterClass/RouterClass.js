"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class RouterClass {
    constructor(route) {
        this.router = (0, express_1.Router)();
        this.route = route;
    }
    getRoute() {
        return this.route;
    }
    getRouter() {
        return this.router;
    }
}
exports.default = RouterClass;
