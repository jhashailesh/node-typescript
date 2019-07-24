import { Request, Response, NextFunction } from "express";

import { user as msg } from "../../lib/helpers/customMessage";
import responseHandler from "../../lib/helpers/responseHandler";
import { inject, injectable } from "inversify";
// import { DIUserModel } from "./user.service";
import { UserModel } from "./user.model";
import {IUserCustomModel} from './user.interface';


// const userModel: any = {};


@injectable()
export class UserController {
  protected model: IUserCustomModel;

  constructor(
    @inject(UserModel) UserModel : IUserCustomModel
  ) {
    this.model = UserModel;
  }

  public fetchAll = async (req: Request, res: Response, next: NextFunction) => {

    try {
      responseHandler
        .reqRes(req, res)
        .onFetch(msg.FETCH_ALL, await this.model.fetchAll(), msg.CREATED_DEC)
        .send();
    } catch (e) {
      // send error with next function.
      next(e);
    }
  };

  /**
   * createUser
   */
  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      responseHandler
        .reqRes(req, res)
        .onCreate(msg.CREATED, await this.model.add(req.body), msg.CREATED_DEC)
        .send();
    } catch (e) {
      next(e);
    }
  };

  public fetch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      responseHandler
        .reqRes(req, res)
        .onCreate(
          msg.CREATED,
          await this.model.fetch(req.params.id),
          msg.CREATED_DEC
        )
        .send();
    } catch (e) {
      next(e);
    }
  };
  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      responseHandler
        .reqRes(req, res)
        .onCreate(
          msg.CREATED,
          await this.model.update(req.params.id, req.body),
          msg.CREATED_DEC
        )
        .send();
    } catch (e) {
      next(e);
    }
  };
}

// export default new UserController;
