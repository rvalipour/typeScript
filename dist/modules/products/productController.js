"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductController {
    constructor() { }
    index(req, res) {
        res.send({ allProduct: [] });
    }
}
exports.default = ProductController;
