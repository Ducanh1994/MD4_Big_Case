import Router from "express";
import productController from "../controllers/productController";
import {auth} from "../middleware/auth";


const productRouter = Router();

productRouter.use(auth);
productRouter.get('/',productController.showProduct);
productRouter.post('/',productController.addProduct);
productRouter.put('/:id',productController.editProduct);
productRouter.delete('/:id',productController.removeProduct);
productRouter.get('/:id',productController.findById);
export default productRouter;