// you can move this interface at any common place
// for now I wil stick with in components flow.

import { Document } from "mongoose";
export interface IUser {
  email: string;
  name: string;
  age: number;
};

export interface IUserModel extends IUser, Document {
  fullName(): string;
  addNewUser():IUserModel;
  isEmailExist(): Promise<boolean>;
}


export interface IUserCustomModel {
  fetchAll():Promise<IUserModel[]>;
  fetch(id:string):Promise<IUserModel | null>;
  update(id: string, body: IUserModel):Promise<IUserModel | null>;
  remove(id: string):Promise<IUserModel | null>;
}