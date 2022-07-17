import { Request, Response } from "express";
import Controller from "../../BaseClassess/Controller";
import { db, sequelize } from "../../DataBase/Sequelize/SequlizeDB";
import  User  from '../../DataBase/Sequelize/userTable'
class UserController implements Controller {
  constructor() {}
  public async index(req: Request, res: Response) {
    try{const users:User[] = await User.findAll()
      console.log(users)
      res.send({ allUsers: users});
    } catch(err){
      if (err instanceof Error)
      res.send({ error:err.message});

    }
    
  }
}
export default UserController;
