"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = void 0;
const adminAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
    }
    const token = authHeader.split(' ')[1];
    // In a real application, you would verify a JWT. 
    // For this simple implementation, we compare against a static ADMIN_SECRET.
    if (token !== process.env.ADMIN_SECRET) {
        return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
    next();
};
exports.adminAuth = adminAuth;
//# sourceMappingURL=auth.js.map