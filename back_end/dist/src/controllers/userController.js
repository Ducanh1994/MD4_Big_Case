"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    constructor() {
        this.register = async (req, res) => {
            await userService_1.default.addUser(req.body);
            res.status(201).json('Create User Success!');
        };
        this.login = async (req, res) => {
            let result = await userService_1.default.checkUser(req.body);
            res.status(201).json(result);
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map