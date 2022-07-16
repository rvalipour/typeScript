"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productController_1 = require("./productController");
const RouterClass_1 = require("../../BaseClassess/RouterClass");
class ProductRouter extends RouterClass_1.default {
    //private userRouter: Router = Router();
    constructor(route) {
        super(route);
        this.productController = new productController_1.default();
        this.router.get("/", this.productController.index);
    }
}
exports.default = ProductRouter;
