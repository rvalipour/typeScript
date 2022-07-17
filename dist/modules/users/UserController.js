"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userTable_1 = require("../../DataBase/Sequelize/userTable");
class UserController {
    constructor() { }
    async index(req, res) {
        try {
            const users = await userTable_1.default.findAll();
            console.log(users);
            res.send({ allUsers: users });
        }
        catch (err) {
            if (err instanceof Error)
                res.send({ error: err.message });
        }
    }
}
exports.default = UserController;
