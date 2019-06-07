import { Request, Response, NextFunction } from "express";
import { user as msg } from "../../lib/helpers/customMessage";
import responseHandler from "../../lib/helpers/responseHandler";
import { DIUserModel } from "./user.service";
import { UserModel } from "./user.model";

const userModel:any = {}

export class UserController {

  protected model: UserModel;

  constructor(model: UserModel){
    this.model = model;
  }

    public fetchAll = async (req: Request, res: Response, next: NextFunction) => {
      try {
        responseHandler.
        reqRes(req, res).
        onFetch(msg.FETCH_ALL, await this.model.fetchAll(), msg.CREATED_DEC).
        send();

      } catch (e) {
        // send error with next function.
        next(e)
      }
    }

    /**
     * createUser
     */
    public create = async (req: Request, res: Response, next: NextFunction) => {
      try {
        responseHandler.
        reqRes(req, res).
        onCreate(msg.CREATED, await this.model.add(req.body), msg.CREATED_DEC).
        send();
      } catch (e) {
        next(e);
      }
    }

    public fetch = async (req: Request, res: Response, next: NextFunction) => {
      try {
        responseHandler.
        reqRes(req, res).
        onCreate(msg.CREATED, await userModel.fetch(req.params.id), msg.CREATED_DEC).
        send();
      } catch (e) {
        next(e);
      }
    }
    public update = async (req: Request, res: Response, next: NextFunction) => {
      try {
        responseHandler.
        reqRes(req, res).
        onCreate(msg.CREATED, await userModel.update(req.params.id, req.body), msg.CREATED_DEC).
        send();
      } catch (e) {
        next(e);
      }
    }
}

export default new UserController(DIUserModel);