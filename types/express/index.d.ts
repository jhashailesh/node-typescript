// We are declaring custom types here which
// do not ships with @type/express Request
// Now you can assign some value to Request interface in
// controller or middleware like  ::

// (req: Request) => {
//   req.someKey = "some Value"
// }
// 

declare namespace Express {
  interface Request {
    boo?: string;
  }
}
