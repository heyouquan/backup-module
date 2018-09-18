const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if(req.methods !== 'POST') {
        next();
    } else { // 请求为Post才需要验证权限
        const token = req.headers.accesstoken || req.body.token || req.query.token;
        if(token) {
            jwt.verify(token, 'expressserverapp', (err, decoded) => {
                if(err) {
                    return res.json({
                        success: false,
                        message: 'token验证失败'
                    })
                } else {
                    req.decoded = decoded;
                    next();
                }
            })
        } else {
            res.json({
                success: false,
                message: 'No token provided'
            })
        }
    }
}