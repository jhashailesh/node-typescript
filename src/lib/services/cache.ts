import mongoose from "mongoose";
import { createClient } from 'redis';
// import  { promisify } from 'util';

import { ICacheOptions } from "../utils/commonInterface";

const redisUrl = 'redis://127.0.0.1:6379';
const client = createClient(redisUrl);




const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options:ICacheOptions = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || "");
  return this;
}

mongoose.Query.prototype.exec = async function ()  {
  const args:any = arguments;

  if(!this.useCache){
    return exec.apply(this, args);
  }

  const key:string = JSON.stringify(
    {...this.getQuery, collection: this.mongooseCollection.name}
  )

  let cacheValue: string = await getHashValue(this.hashKey, key);

  // FIXME: Self.model is not available in self typescript declaration file.
  if (cacheValue) {
    // tslint:disable-next-line: no-this-assignment
    const self:any = this;
    cacheValue = JSON.parse(cacheValue);
    return Array.isArray(cacheValue) ? 
    cacheValue.map(d=> new self.model(d)) : 
    new self.model(cacheValue);
  }
    const result = await exec.apply(this, args);
    client.hset(this.hashKey, key, JSON.stringify(result));
    client.expire(this.hashKey, 180);
    return result;
}

const getHashValue = (hashKey: string, key: string): Promise<string> => {
  return new Promise( (resolve, reject)=> {
    client.hget(hashKey, key,(err, result)=>{
      if(err){
        reject(err);
      }
      resolve(result);
    })
  });
}



export const clearHash = (hashKey:string)=>{
  client.del(JSON.stringify(hashKey));
}
