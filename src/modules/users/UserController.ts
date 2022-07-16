import { Request, Response } from "express";
import Controller from "../../BaseClassess/Controller";
import { db } from "../../DataBase/DataBase";
class UserController implements Controller {
  constructor() {}
  public index(req: Request, res: Response) {
    db.init()
    res.send({ allUsers: [] });
  }
}
export default UserController;
