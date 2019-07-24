import "reflect-metadata";
import {Container} from 'inversify';
import { UserModel } from './user.model';
import {UserController} from "./user.controller";
import {IUserCustomModel} from './user.interface';

const DIContainer = new Container();

DIContainer.bind<IUserCustomModel>(UserModel).toSelf();

// export default DIContainer;


export const DIUserModel:IUserCustomModel = DIContainer.get<IUserCustomModel>(UserModel);
export const userController: UserController = DIContainer.resolve<UserController>(UserController);