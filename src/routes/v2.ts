import { Request, Response, NextFunction } from "express";

export default [ {
  path: "/",
  method: "get",
  handler: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({message: "You are on version 2 Api"});
    } catch (e) {
      // send error with next function.
      next(e)
    }
  }
}];