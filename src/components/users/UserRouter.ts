import { Router } from "express";
import UserController from "./UserController";
import RouterClass from "../../RouterClass/RouterClass";
class UserRouter extends RouterClass {
  private userController: UserController = new UserController();
  //private userRouter: Router = Router();
  constructor(route:string){
    super(route)
    this.router.get("/", this.userController.index);

  }

 
  
}


export default UserRouter;
