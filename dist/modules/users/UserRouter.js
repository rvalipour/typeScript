"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("./UserController");
const RouterClass_1 = require("../../BaseClassess/RouterClass");
class UserRouter extends RouterClass_1.default {
    //private userRouter: Router = Router();
    constructor(route) {
        super(route);
        this.userController = new UserController_1.default();
        this.router.get("/", this.userController.index);
    }
}
exports.default = UserRouter;
