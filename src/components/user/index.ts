import { Request, Response, NextFunction } from "express";
import { HTTP401Error } from "../../lib/utils/httpErrors";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const param: number = req.query.numb;
        console.log(param);
        throw new HTTP401Error("You are not authorized user");
      } catch (e) {
        // send error with next function.
        next(e)
      }
    }
  }
];