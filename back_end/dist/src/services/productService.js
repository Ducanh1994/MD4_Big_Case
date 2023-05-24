"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entities/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.showAll = async () => {
            const listProduct = await this.productRepository.find({
                relations: {
                    category: true,
                },
            });
            return listProduct;
        };
        this.addProduct = async (product) => {
            await this.productRepository.save(product);
        };
        this.editProduct = async (id, product) => {
            await this.productRepository.update({ id }, {
                name: product.name, price: product.price,
                quantity: product.quantity, category: product.category
            });
        };
        this.removeProduct = async (id) => {
            await this.productRepository.delete({ id });
        };
        this.findById = async (id) => {
            return await this.productRepository.findOne({
                where: { id: id },
                relations: {
                    category: true,
                }
            });
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map