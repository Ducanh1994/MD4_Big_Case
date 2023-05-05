"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = void 0;
const adminAuth = (req, res, next) => {
    if (req.decode.role === 'admin') {
        next();
    }
    else {
        res.status(401).json({
            message: 'you must be admin'
        });
    }
};
exports.adminAuth = adminAuth;
//# sourceMappingURL=adminAuth.js.map