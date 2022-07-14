"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = require("./components/users/userRouter");
class Router {
    constructor(app) {
        this.routers = new Map();
        this.app = app;
    }
    registerRouter(route, router) {
    }
    run() {
        /*this.app.get("/api/v1/users", (req: Request, res: Response) => {
          res.send({ users: "success" });
        });*/
        this.app.use("/api/v1/users", userRouter_1.default);
    }
}
exports.default = Router;
