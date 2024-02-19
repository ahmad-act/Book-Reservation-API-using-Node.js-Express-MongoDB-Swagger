const userModel = require('../models/userModel');
const decodeJwtToken = require('./decodeJwtToken');

async function getAuthUser(jwtToken) {

    const decodedToken = decodeJwtToken(jwtToken);
    const user = await userModel.findById(decodedToken.userId);
    
    if (!user) {
        const error = new Error();
        error.status = 401;
        error.message = 'You are not authorized to access this application, please login again';
        error.error = `Login unauthenticated attempt from ${decodedToken.email}`;
        throw error;
    }

    return user;
}

module.exports = getAuthUser;
