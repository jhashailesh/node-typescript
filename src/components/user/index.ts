import { Request, Response, NextFunction } from "express";
import { HTTP401Error } from "../../lib/utils/httpErrors";
import responseHandler from "../../lib/helpers/responseHandler";
import { user as msg } from "../../lib/helpers/customMessage";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response, next: NextFunction) => {
      try {
        throw new HTTP401Error();
        const query: number = req.query.numb;
        responseHandler.
        reqRes(req, res).
        onCreate(msg.CREATED, query, msg.CREATED_DEC).
        send();

      } catch (e) {
        // send error with next function.
        next(e)
      }
    }
  }
];