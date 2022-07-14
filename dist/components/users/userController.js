"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor() { }
    index(req, res) {
        res.send({ allUsers: [] });
    }
}
exports.default = UserController;
