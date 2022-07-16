"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../../DataBase/DataBase");
class UserController {
    constructor() { }
    index(req, res) {
        DataBase_1.db.init();
        res.send({ allUsers: [] });
    }
}
exports.default = UserController;
