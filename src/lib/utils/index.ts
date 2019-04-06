import { Router } from "express";

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