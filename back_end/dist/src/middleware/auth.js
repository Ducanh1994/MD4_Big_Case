"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.secret = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.secret = '123456';
const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(' ')[1];
        if (accessToken) {
            jsonwebtoken_1.default.verify(accessToken, exports.secret, (err, payload) => {
                if (err) {
                    res.status(401).json({
                        err: err.message,
                        message: 'You are not allowed to access!'
                    });
                }
                else {
                    req.decode = payload;
                    return next();
                }
            });
        }
        else {
            res.status(401).json({
                message: 'You are not allowed to access!'
            });
        }
    }
    else {
        res.status(401).json({
            message: 'You are not allowed to access!'
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map