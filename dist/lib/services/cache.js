"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const redis_1 = require("redis");
const redisUrl = 'redis://127.0.0.1:6379';
const client = redis_1.createClient(redisUrl);
const exec = mongoose_1.default.Query.prototype.exec;
mongoose_1.default.Query.prototype.cache = function (options = {}) {
    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || "");
    return this;
};
mongoose_1.default.Query.prototype.exec = async function () {
    const args = arguments;
    if (!this.useCache) {
        return exec.apply(this, args);
    }
    const key = JSON.stringify({ ...this.getQuery, collection: this.mongooseCollection.name });
    let cacheValue = await getHashValue(this.hashKey, key);
    if (cacheValue) {
        const self = this;
        cacheValue = JSON.parse(cacheValue);
        return Array.isArray(cacheValue) ?
            cacheValue.map(d => new self.model(d)) :
            new self.model(cacheValue);
    }
    const result = await exec.apply(this, args);
    client.hset(this.hashKey, key, JSON.stringify(result));
    client.expire(this.hashKey, 180);
    return result;
};
const getHashValue = (hashKey, key) => {
    return new Promise((resolve, reject) => {
        client.hget(hashKey, key, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};
exports.clearHash = (hashKey) => {
    client.del(JSON.stringify(hashKey));
};
//# sourceMappingURL=cache.js.map