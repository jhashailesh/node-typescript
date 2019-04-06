import { Router, Request, Response, NextFunction } from "express";

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

interface IRoute {
  path: string;
  method: string;
  handler: Handler | Handler[];
}

// loading all routes and initialize to use them. 
export const applyRoutes = (routes: IRoute[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};