import {Request,Response} from "express";
import UserService from "../services/userService";


class UserController {

    constructor() {
    }
    register = async (req:Request,res:Response) => {
        await UserService.addUser(req.body);
        res.status(201).json('Create User Success!')
    }
    login = async (req:Request,res:Response) => {
        let result = await UserService.checkUser(req.body);
        res.status(201).json(result)
    }
}

export default new UserController();