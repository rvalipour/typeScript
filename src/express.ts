import * as express from "express";
import { Application, Request, Response } from "express";
import Routers from "./Routers";
import userRouter from "./components/users/UserRouter";

class App {
  private app: Application;
  private port: number;
  private router: Routers;
  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.router = new Routers(this.app);
    this.router.run();
  }
  public run() {
    this.app.listen(this.port, () => {
      console.log(`App is listening to port ${this.port}`);
    });
  }
  /*public router() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send({ test: "salam" });
    });
  }*/
}
export default App;
