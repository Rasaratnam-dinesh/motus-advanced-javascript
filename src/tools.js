const jwt = require('jsonwebtoken');


const generateAccessToken = (payload) => {
    return jwt.sign({id: payload}, 'secret', { expiresIn: '5s' });
}

const generateRefreshToken = (payload) => {
    return jwt.sign({id: payload}, 'secret', { expiresIn: '30d' });
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
};