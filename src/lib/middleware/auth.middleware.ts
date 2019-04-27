import { NextFunction, Response, Request, Router } from "express";
import { IRoute } from "../utils";


export const  Authorization = (route: IRoute, router: Router) =>{
  router.use((req:Request, res: Response, next: NextFunction)=>{
    if(req.header("Authorization")){
      console.log(req.header(`Authorization`));
      next();
    }else{
      console.log(route);
      next(new Error("not authorised"));     
    }
  });
}
