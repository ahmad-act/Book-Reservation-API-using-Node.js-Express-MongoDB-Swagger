const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');
const { toTimestampLog } = require('./toTimestamp');

// Console transport configuration for both success and error loggers
const consoleConfig = [
    new winston.transports.Console({
        colorize: true
    })
];

// Function to add timestamp to log messages
const addTimestamp = winston.format((info, opts) => {
    if (opts.tz) {
        info.timestamp = toTimestampLog(opts.tz);
    } else {
        info.timestamp = new Date().toISOString();
    }
    return info;
});

// Success Logger Configuration
const successLoggerWinston = () => {
    try {
        return winston.createLogger({
            transports: [
                ...consoleConfig,
                new winstonRotator({
                    name: 'success-file',
                    level: 'info',
                    filename: './logs/success_%DATE%.log', // Adding %DATE% in the filename
                    json: false, // Set to true if you want JSON logs
                    datePattern: 'YYYY-MM', // 'YYYY-MM-DD'
                    prepend: true,
                    format: winston.format.combine(
                        addTimestamp({ tz: process.env.TIMEZONE }), // Finland time zone
                        winston.format.simple(),
                        winston.format.printf(({ timestamp, level, message }) => {
                            return JSON.stringify({ timestamp, level: level.toUpperCase(), message });
                        })
                    )
                })
            ]
        });
    } catch (error) {
        console.error('Error creating success logger:', error);
        return winston.createLogger();
    }
};

// Error Logger Configuration
const errorLoggerWinston = () => {
    try {
        return winston.createLogger({
            transports: [
                ...consoleConfig,
                new winstonRotator({
                    name: 'error-file',
                    level: 'error',
                    filename: './logs/error_%DATE%.log', // Adding %DATE% in the filename
                    json: false, // Set to true if you want JSON logs
                    datePattern: 'YYYY-MM', // 'YYYY-MM-DD'
                    prepend: true,
                    format: winston.format.combine(
                        addTimestamp({ tz: process.env.TIMEZONE }), // Finland time zone
                        winston.format.simple(),
                        winston.format.printf(({ timestamp, level, message }) => {
                            return JSON.stringify({ timestamp, level: level.toUpperCase(), message });
                        })
                    )
                })
            ]
        });
    } catch (error) {
        console.error('Error creating error logger:', error);
        return winston.createLogger();
    }
};

module.exports = {
    successLogger: successLoggerWinston(),
    errorLogger: errorLoggerWinston()
};
