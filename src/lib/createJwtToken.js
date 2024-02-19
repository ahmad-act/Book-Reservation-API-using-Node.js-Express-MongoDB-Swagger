const jwt = require('jsonwebtoken');

function createJwtToken(userId) {
    const maxAge = parseInt(process.env.MAX_AGE, 10); // 7 days

    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: maxAge // expires in second
    });
}

module.exports = createJwtToken;