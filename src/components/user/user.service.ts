import "reflect-metadata";
import {Container} from 'inversify';
import { UserModel } from './user.model';

const DIContainer = new Container();

DIContainer.bind<UserModel>(UserModel).toSelf();

export default DIContainer;
export const DIUserModel:UserModel = DIContainer.get<UserModel>(UserModel);
