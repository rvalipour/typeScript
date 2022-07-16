import { Request, Response } from "express";
import Controller from "../../BaseClassess/Controller";
class ProductController implements Controller{
  constructor() {}
  public index(req: Request, res: Response):void {
    res.send({ allProduct: [] });
    
  }
}
export default ProductController;
