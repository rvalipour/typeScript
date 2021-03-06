import { Router } from "express";
class RouterClass {
  protected route: string;
  protected router: Router;
  constructor(route: string) {
    this.route = route;
    this.router = Router()
  }
  public getRoute():string{
    return this.route
  }
  public getRouter():Router{
    return this.router
  }
}
export default RouterClass;
