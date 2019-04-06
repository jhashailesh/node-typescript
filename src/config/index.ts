export const configCors = {
  // Allow your domains to restrict ill apis.
  allowOrigin : [
    'http://localhost:3000',
    'http://yourapp.com'
  ],
  // Expose additional which are restricted.
  exposedHeaders: ["X-Token"]
}

export const rateLimitConfig = {
  inTime : process.env.REQUEST_TIME || 1*60*1000,
  maxRequest: process.env.MAX_REQUEST|| 12
}