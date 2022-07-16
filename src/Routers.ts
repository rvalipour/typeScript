import { Application, Request, Response, Router } from "express";
import UserRouter from './modules/users/UserRouter'
import RouterClass from "./BaseClassess/RouterClass";
class Routers {
  private app: Application;
  private routers:RouterClass[] = new Array<RouterClass>();
 
  //private userRouter:UserRouter = new UserRouter('users')
  constructor(app: Application) {
    this.app = app;
    //this.routers.push(new UserRouter('users'))
  }
  public registerRouter(router:RouterClass){
    this.routers.push(router)
    

  }
  public run() {
    /*this.app.get("/api/v1/users", (req: Request, res: Response) => {
      res.send({ users: "success" });
    });*/
    this.routers.forEach((router)=>{
      this.app.use(`/api/v1/${router.getRoute()}`,router.getRouter())

    })
    
  }
}
export default Routers