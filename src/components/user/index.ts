import userController from "./user.controller";


export default [
  {
    path: "/",
    method: "get",
    handler: [userController.fetchAll]
  },
  {
    path: "/",
    method: "post",
    handler: [userController.create]
  },
  {
    path: "/:id",
    method: "get",
    handler: [userController.fetch]
  },
  {
    path: "/:id",
    method: "put",
    handler: [userController.update]
  },
  {
    path: "/:id",
    method: "delete",
    handler: [userController.fetchAll]
  }
];
