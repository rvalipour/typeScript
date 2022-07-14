"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRouter_1 = require("./components/users/UserRouter");
class Routers {
    constructor(app) {
        this.routers = new Array();
        this.userRouter = new UserRouter_1.default('users');
        this.app = app;
        this.routers.push(this.userRouter);
    }
    registerRouter(route, router) {
    }
    run() {
        /*this.app.get("/api/v1/users", (req: Request, res: Response) => {
          res.send({ users: "success" });
        });*/
        this.routers.forEach((router) => {
            this.app.use(`/api/v1/${router.getRoute()}`, router.getRouter());
        });
    }
}
exports.default = Routers;
