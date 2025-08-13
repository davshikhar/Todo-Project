const jwt = require('jsonwebtoken');
require('dotenv').config();
function userMiddleware(req, res, next) {
    // Implement user auth logic

    const token = req.headers.token;
    const verify = jwt.verify(token,process.env.SECRET);
    if(verify){
        const decode = jwt.decode(token);
        req.userId = decode;
        next();
    }
    
    res.status(401).json({message:"Wrong credentails"});
}

module.exports = userMiddleware;