
export const mongoUrl = (): string=> {
  const configs = {
      dbAccess: process.env.DB_ACCESS ||"local",
      user: process.env.DB_USER ||"shailesh",
      pass: process.env.DB_PASS ||"",
      cluster: process.env.DB_CLUSTER ||"",
      db: process.env.DB || "nodeType"
  }

  if(configs.dbAccess === "local"){
      return `mongodb://localhost:27017/${configs.db}`;
  }
  return `mongodb+srv://${configs.user}:${configs.pass}@${configs.cluster}.mongodb.net/${configs.db}?retryWrites=true`
}




export const configCors = {
  // Allow your domains to restrict ill apis.
  allowOrigin : [
    'http://localhost:3000',
    'http://yourapp.com'
  ],
  // Expose additional which are restricted.
  exposedHeaders: ["X-Token"]
}

/*------------------------------------------------
| Rate limiting configuration
--------------------------------------------------
| Put limit on number of request per ip at
| some amount of time. It can prevent you from
| some bad (scripted) API hits.
| ------------------------------------------------
| NPM :: express-rate-limit
| https://www.npmjs.com/package/express-rate-limit
|
*/
export const rateLimitConfig = {
  inTime : process.env.REQUEST_TIME || 1*60*1000,
  maxRequest: process.env.MAX_REQUEST|| 12
}

/*------------------------------------------------
| Email Configuration
--------------------------------------------------
| NPM :: nodemailer
| https://nodemailer.com
|
*/
export const emailConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, 
  user: "some@email.com", // generated ethereal user
  pass: "pass",
  from: "👻",
  productionMode: false
}


