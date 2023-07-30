import { LoggerOptions, pino } from "pino";
import { envVars as env } from "./parseEnvVars.js";

/**
 * Returns a configured instance of the Pino Logger
 * If NODE_ENV is set to "development", then the logger uses pino-pretty
 *
 * @returns {Logger<LoggerOptions>} Pino Logger
 */
function createLogger() {
    const loggerOptions: LoggerOptions = {
        base: { pid: process.pid },
        level: env.LOG_LEVEL || "debug",
    };

    // Use pino-pretty if in development
    if (env.NODE_ENV === "development") {
        loggerOptions.transport = {
            target: "pino-pretty",
            options: {
                translateTime: "UTC:yyyy-mm-dd HH:MM:ss.l o",
                colorize: true,
            },
        };
    }

    const logger = pino(loggerOptions);
    return logger;
}

const logger = createLogger();
export { logger };
