import { Request, Response } from "express";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      try {
        const param: number = req.query.numb;
        console.log(param);
        res.send(param);
      } catch (e) {
        res.send("error message");
        // We don't have any error handlers for that we will use to handle our error.
      }
    }
  }
];