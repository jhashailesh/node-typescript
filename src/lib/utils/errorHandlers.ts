
import { Response, NextFunction } from "express";
import { HTTPClientError, HTTP404Error } from "../utils/httpErrors";

// When specific api path is not available then throw 404 error. we are passing 
// the errors to next function.
export const notFoundError = () => {
  throw new HTTP404Error("Method not found.");
};

// Handles client side error, If not moved to next function.
export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    res.status(err.statusCode).send(err.message);
  } else {
    next(err);
  }
};

// handles server side error.
export const serverError = (err: Error, res: Response, next: NextFunction) => {
  // console.error(err);
  if (process.env.NODE_ENV === "production") {
    res.status(500).send("Internal Server Error");
  } else {
    res.status(500).send(err.stack);
  }
};