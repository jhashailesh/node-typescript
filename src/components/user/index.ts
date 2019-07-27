import { userController } from "./user.service";

export default [
  {
    path: "/",
    method: "get",
    escapeAuth:true,
    handler: [userController.fetchAll]
  },
  {
    path: "/",
    method: "post",
    escapeAuth: true,
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
