import {config} from "dotenv";
import * as http from "http";
import { log } from "util";

// Initializing the dot env file very early of this project to use every where
config();

// calling app to create server :: Our logics will belong to this app.
import { app } from "./app";

// Set PORT in .env or use 3000 by default  
const port:number = process.env.PORT ? +process.env.PORT : 3000;

// Create http server [non ssl]
const server = http.createServer(app);

server.listen(port);
server.on('listening', ()=>{
    log(`listening on port ${port}`);
});
