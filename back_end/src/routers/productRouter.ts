import Router from "express";
import productController from "../controllers/productController";
import {auth} from "../middleware/auth";
import {adminAuth} from "../middleware/adminAuth";


const productRouter = Router();

productRouter.get('/',productController.showProduct);
productRouter.use(auth);
productRouter.use(adminAuth);
productRouter.post('/',productController.addProduct);
productRouter.put('/:id',productController.editProduct);
productRouter.delete('/:id',productController.removeProduct);
productRouter.get('/:id',productController.findById);
export default productRouter;