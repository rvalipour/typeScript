import * as express from "express";
import { Application, Request, Response } from "express";
import Routers from "./Routers";
import UserRouter from "./modules/users/UserRouter";
import ProductRouter from "./modules/products/productRouter";
import {db} from './DataBase/Sequelize/SequlizeDB'
class App {
  private app: Application;
  private port: number;
  private routers: Routers;
  
  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.routers = new Routers(this.app);
    this.routers.registerRouter(new UserRouter('users'))
    this.routers.registerRouter(new ProductRouter('products'))
    this.routers.run();
    
  }
  public async run() {
    await db.init()
    this.app.listen(this.port, () => {
      console.log(`App is listening to port ${this.port}`);
    });
  }
  
}
export default App;
