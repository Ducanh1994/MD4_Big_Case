"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    constructor() {
        this.showProduct = async (req, res) => {
            const listProduct = await productService_1.default.showAll();
            res.status(200).json(listProduct);
        };
        this.addProduct = async (req, res) => {
            const product = req.body;
            await productService_1.default.addProduct(product);
            res.status(200).json('ok');
        };
        this.editProduct = async (req, res) => {
            const id = req.params.id;
            const product = req.body;
            await productService_1.default.editProduct(id, product);
            res.status(200).json('ok');
        };
        this.removeProduct = async (req, res) => {
            const id = req.params.id;
            await productService_1.default.removeProduct(id);
            res.status(200).json('ok');
        };
        this.findById = async (req, res) => {
            const id = req.params.id;
            const product = await productService_1.default.findById(id);
            res.status(200).json(product);
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map