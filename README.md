# node-typescript
This is node app (handles Rest APIs) with express, mongoose it's built on top of Typescript. This application I made is just to showcase a better way to manage and structure a app. Feel free to change anything. 

# Start Server

**1.** This will run with ts-node and start server, It will run node.js code without compiling typescript file into javascript. *Downside is that it is not able to run on server with pm2 at the time I am writing it* So for production it's better to go with compiled version.  
>npm run start

**2.** This will compile typescript file into js file in dist folder in root (*you can change that*), and start server with compiled version of typescript.
> npm start compile

**3.** Start with pm2. For this use compiled version and change in pm2.yml as required and run
>npm start compile     *// first compile into js*
>
>npm start startPM2

# Structure

