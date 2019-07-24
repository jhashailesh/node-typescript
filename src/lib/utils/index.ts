import { Router, Request, Response, NextFunction } from "express";
import { Authorization } from "../middleware/auth.middleware";

type Wrapper = ((router: Router) => void);

// load all middleware with this function call
export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};

/* Handles all type of api requests. */

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;


// type httpMethods = "get" | "put" | "post" | "patch" | "delete" | "head" | "option";

export interface IRoute {
  path: string | string[];
  method: string;
  escapeAuth?: boolean;
  handler: Handler | Handler[];
}

// loading all routes and initialize to use them. 
export const applyRoutes = (routes: IRoute[], router: Router) => {
    for (const route of routes) {
      const { method, path, escapeAuth} = route;
      let handler = route.handler;
      
      if(!Array.isArray(handler)){
        handler = [handler];
      }
    
      if(!escapeAuth){
        (router as any)[method](path, [Authorization, ...handler]);
      }
      (router as any)[method](path, handler);
      
    }
    return router;
};
