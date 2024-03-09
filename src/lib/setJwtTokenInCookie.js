const createJwtToken = require('./createJwtToken');

function setJwtTokenInCookie(response, userId) {
    const maxAge = parseInt(process.env.MAX_AGE, 10) * 1000; // 7 days
    const jwtToken = createJwtToken(userId);

    response.cookie('jwt', jwtToken, {
        httpOnly: true,
        //HostOnly: false,
        maxAge: maxAge, //maxAge in millisecond
        sameSite: 'None',
        secure: true
    });

    return jwtToken;
}

module.exports = setJwtTokenInCookie