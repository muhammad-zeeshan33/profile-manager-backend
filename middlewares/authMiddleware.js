const jwt = require('jsonwebtoken');
const config = require('../config/enviroments.dev');

const authMiddleware = (req, res, next) => {    
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {        
        const token = authHeader.split(' ')[1];

        try {            
            const decoded = jwt.verify(token, config.jwtSecret);            
            req.user = decoded;            
            next();
        } catch (error) {            
            res.status(401).json({ error: 'Invalid or expired token' });
        }
    } else {        
        res.status(401).json({ error: 'Missing or invalid authorization header' });
    }
};

module.exports = authMiddleware;
