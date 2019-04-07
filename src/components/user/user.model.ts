import { User, IUserModel } from "./user.schema";

export class UserModel {

  async fetchAll() {
    return User.find({}, 'name email age');
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


export default new UserModel;