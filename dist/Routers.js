"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routers {
    //private userRouter:UserRouter = new UserRouter('users')
    constructor(app) {
        this.routers = new Array();
        this.app = app;
        //this.routers.push(new UserRouter('users'))
    }
    registerRouter(router) {
        this.routers.push(router);
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
