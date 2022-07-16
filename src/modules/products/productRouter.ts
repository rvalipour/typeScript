
import ProductController from "./productController";
import RouterClass from "../../BaseClassess/RouterClass";
class ProductRouter extends RouterClass {
  private productController: ProductController = new ProductController();
  //private userRouter: Router = Router();
  constructor(route:string){
    super(route)
    this.router.get("/", this.productController.index);

  }

 
  
}


export default ProductRouter;
