import { connect, connection } from "mongoose";
import * as chalk from "chalk";
import { mongoUrl } from "../../config";

// require database URL from properties file

const connected = chalk.default.bold.cyan;
const error = chalk.default.bold.yellow;
const disconnected = chalk.default.bold.red;
const termination = chalk.default.bold.magenta;


class Connection {

  private mongoUrl:string;
  constructor(uri:string){
    this.mongoUrl = uri;
  }

    public mongoConnection(){
        const dbURL:any = this.mongoUrl;
        // FIXME: Fix this connection issue....
        connect(dbURL, this.mongoOption());

        connection.on('connected', ()=>{
            console.log(connected("Mongoose default connection is open to ", dbURL , "\u{1F60D}"));
        });

        connection.on('error', (err)=>{
            console.log(error("Mongoose default connection has occured "+err+" error"));
        });

        connection.on('disconnected', ()=>{
            console.log(disconnected("Mongoose default connection is disconnected"));
        });

        process.on('SIGINT', ()=>{
            connection.close(()=>{
                console.log(termination("Mongoose default connection is disconnected due to application termination"));
                process.exit(0)
            });
        });
    }

    protected mongoOption(): any {
        return{

          // absolutely copied from mongoose docs. 
          // Change according to your need
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false, // Don't build indexes
            reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            reconnectInterval: 500, // Reconnect every 500ms
            poolSize: 10, // Maintain up to 10 socket connections
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
          }
    }
}


export default new Connection(mongoUrl());
