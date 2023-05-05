import {User} from "../entities/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {secret} from "../middleware/auth";


class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }
    addUser = async (user) => {
        user.password = await bcrypt.hash(user.password,10);
        user.role = 2;
        return this.userRepository.save(user);
    }
    checkUser = async (user) => {
        let userFound = await this.userRepository.findOneBy({username: user.username})
        if (userFound) {
            let comparePassword = await bcrypt.compare(user.password,userFound.password);
            if (comparePassword) {
                let payload = {
                    username: userFound.name,
                    id: userFound.id
                }
                return jwt.sign(payload,secret,{
                    expiresIn: 36000*1000
                })
            }
            else {
                return 'Wrong Password'
            }
        }
        else {
            return 'User does not exist'
        }
    }
}

export default new UserService();