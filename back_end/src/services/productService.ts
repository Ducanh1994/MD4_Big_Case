import {Product} from "../entities/product";
import {AppDataSource} from "../data-source";


class ProductService {
    private productRepository;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }

    showAll = async () => {
        const listProduct = await this.productRepository.find({
            relations: {
                category: true,
            },
        });
        return listProduct;
    }
    addProduct = async (product) => {
        await this.productRepository.save(product);
    }
    editProduct = async (id, product) => {
        await this.productRepository.update(
            {id}, {
                name: product.name, price: product.price,
                quantity: product.quantity, category: product.category
            });
    }
    removeProduct = async (id) => {
        await this.productRepository.delete({id});
    }
    findById = async (id) => {
        return await this.productRepository.findOne({
            where: {id: id},
            relations: {
                category: true,
            }
        })
    }
}

export default new ProductService();