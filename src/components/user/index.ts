import { Request, Response, NextFunction } from "express";
import { HTTP401Error } from "../../lib/utils/httpErrors";
import responseHandler from "../../lib/helpers/responseHandler";


export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response, next: NextFunction) => {
      try {
        throw new HTTP401Error("You are not authorized user", "It is discription and it is optional");
        const query: number = req.query.numb;
        responseHandler.
        reqRes(req, res).
        onCreate("created Success Fully", query).
        send();

      } catch (e) {
        // send error with next function.
        next(e)
      }
    }
  }
];