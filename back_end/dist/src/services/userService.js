"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entities/user");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UserService {
    constructor() {
        this.addUser = async (user) => {
            user.password = await bcrypt_1.default.hash(user.password, 10);
            user.role = 2;
            return this.userRepository.save(user);
        };
        this.checkUser = async (user) => {
            let userFound = await this.userRepository.findOneBy({ username: user.username });
            if (userFound) {
                let comparePassword = await bcrypt_1.default.compare(user.password, userFound.password);
                if (comparePassword) {
                    let payload = {
                        username: userFound.name,
                        id: userFound.id
                    };
                    return jsonwebtoken_1.default.sign(payload, auth_1.secret, {
                        expiresIn: 36000 * 1000
                    });
                }
                else {
                    return 'Wrong Password';
                }
            }
            else {
                return 'User does not exist';
            }
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map