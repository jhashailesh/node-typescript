import { User} from "./user.schema";
import { injectable } from "inversify";
import { IUserCustomModel, IUserModel } from "./user.interface";
// import { HTTP400Error } from "../../lib/utils/httpErrors";

@injectable()
export class UserModel implements IUserCustomModel {

  async fetchAll() {
    // throw new HTTP400Error("nahi hai bhai");
    
    return User.find({}, 'name email age createdAt');
  }

  async fetch(id: string) {
    return User.findById(id, 'name email age');
  }

  async add(body: IUserModel) {
    const q: IUserModel = new User(body);
    return q.addNewUser();
  }

  async update(id: string, body: IUserModel) {
    return User.findByIdAndUpdate(id, body, { new: true, runValidators: true });
  }

  async remove(id: string) {
    const q: IUserModel = new User({ _id: id });
    return q.remove();
  }
}


// export default new UserModel;
