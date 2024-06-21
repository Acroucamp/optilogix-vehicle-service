import { createLogger, format, transports } from 'winston';
import { Logger } from 'winston';

const { combine, timestamp, printf, errors, colorize } = format;

// Custom format for log messages
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

// Create the logger
const logger: Logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }), // To capture stack trace
    colorize(), // To add colors to log levels
    logFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Adding custom log levels
logger.add(
  new transports.Console({
    format: combine(
      timestamp(),
      format((info) => {
        return info;
      })(),
      logFormat,
    ),
  }),
);

export default logger;
