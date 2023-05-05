import jwt from "jsonwebtoken";

export const secret = '123456';
export const auth = (req,res,next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(' ')[1];
        if (accessToken){
            jwt.verify(accessToken,secret,(err,payload) => {
                if (err){
                    res.status(401).json({
                        err: err.message,
                        message: 'You are not allowed to access!'
                    })
                }
                else {
                    req.decode = payload;
                    return next();
                }
            })
        }
        else {
            res.status(401).json({
                message: 'You are not allowed to access!'
            })
        }
    }
    else {
        res.status(401).json({
            message: 'You are not allowed to access!'
        })
    }
}