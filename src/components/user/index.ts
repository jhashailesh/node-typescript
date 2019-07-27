import { userController } from "./user.service";

export default [
  {
    path: "user/",
    method: "get",
    escapeAuth:true,
    handler: [userController.fetchAll]
  },
  {
    path: "user/",
    method: "post",
    escapeAuth: true,
    handler: [userController.create]
  },
  {
    path: "user/:id",
    method: "get",
    handler: [userController.fetch]
  },
  {
    path: "user/:id",
    method: "put",
    handler: [userController.update]
  },
  {
    path: "user/:id",
    method: "delete",
    handler: [userController.fetchAll]
  }
];
