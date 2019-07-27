import {Container} from 'inversify';
import { UserModel } from './../components/user/user.model';
import {IUserCustomModel} from './../components/user/user.interface';

const DIContainer = new Container();

DIContainer.bind<IUserCustomModel>(UserModel).toSelf();
export default DIContainer;