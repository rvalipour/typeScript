import { Request, Response } from "express";
interface  Controller {
    index(req: Request, res: Response):void
 
}
export default Controller;
