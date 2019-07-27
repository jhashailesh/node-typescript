import { NextFunction, Response, Request} from "express";
import { HTTP401Error } from "../utils/httpErrors";

export const  Authorization = (req:Request, res: Response, next: NextFunction)=>{

  if(req.header("Authorization")){

    // Put you authentication logic here ...
    console.log(req.header(`Authorization`));
    next();
  }else{
    next(new HTTP401Error("You are not authorized"));
  }
}
