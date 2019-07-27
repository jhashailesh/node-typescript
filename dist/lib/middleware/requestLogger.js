"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = __importStar(require("chalk"));
const util_1 = require("util");
const red = chalk.default.redBright;
const green = chalk.default.greenBright;
const yellow = chalk.default.yellowBright;
const cyan = chalk.default.cyanBright.bold;
const bgRed = chalk.default.bgRedBright;
const bgGreen = chalk.default.bgGreenBright;
const bgYellow = chalk.default.bgYellow;
exports.requestLogger = (req, res, next) => {
    util_1.log(green(`${req.method} ${req.originalUrl}`));
    const start = new Date().getTime();
    res.on("finish", () => {
        const elapsed = new Date().getTime() - start;
        reqConsoleLogger({
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            time: elapsed
        });
    });
    next();
};
const reqConsoleLogger = (logValue) => {
    let { status, method, url, time } = logValue;
    if (status < 400) {
        util_1.log(green(`${method} ${url} -> `) + bgGreen(`${status}`) + cyan(` ${time}ms`));
    }
    else if (status < 500) {
        util_1.log(yellow(`${method} ${url} -> `) + bgYellow(`${status}`) + cyan(` ${time}ms`));
    }
    else {
        util_1.log(red(`${method} ${url} -> `) + bgRed(`${status}`) + cyan(` ${time}ms`));
    }
};
//# sourceMappingURL=requestLogger.js.map