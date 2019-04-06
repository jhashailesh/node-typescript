import { Router, json, urlencoded } from "express";

/* here all middleware come. Don't need to do anything in app.js*/
export const handleBodyRequestParsing = (router: Router) => {
  router.use(urlencoded({ extended: true }));
  router.use(json());
};

