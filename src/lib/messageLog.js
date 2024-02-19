const successLogger = require('./logger').successLogger;

function messageLog(message, flug = '') {

    successLogger.info(`Message : ${message}`);

}

module.exports = messageLog;