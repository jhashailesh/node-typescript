"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chalk = __importStar(require("chalk"));
const config_1 = require("../../config");
var connected = chalk.default.bold.cyan;
var error = chalk.default.bold.yellow;
var disconnected = chalk.default.bold.red;
var termination = chalk.default.bold.magenta;
class Connection {
    constructor(uri) {
        this.mongoUrl = uri;
    }
    mongoConnection() {
        const dbURL = this.mongoUrl;
        mongoose_1.connect(dbURL, this.mongoOption());
        mongoose_1.connection.on('connected', () => {
            console.log(connected("Mongoose default connection is open to ", dbURL, "\u{1F60D}"));
        });
        mongoose_1.connection.on('error', (err) => {
            console.log(error("Mongoose default connection has occured " + err + " error"));
        });
        mongoose_1.connection.on('disconnected', () => {
            console.log(disconnected("Mongoose default connection is disconnected"));
        });
        process.on('SIGINT', () => {
            mongoose_1.connection.close(() => {
                console.log(termination("Mongoose default connection is disconnected due to application termination"));
                process.exit(0);
            });
        });
    }
    mongoOption() {
        return {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 10,
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            family: 4
        };
    }
}
exports.default = new Connection(config_1.mongoUrl());
//# sourceMappingURL=dbConnection.js.map