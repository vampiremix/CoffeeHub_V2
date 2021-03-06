import { ShopsModel } from "./shops.model";

export class UsersModel {
  _id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  profileImageURL: string;
  provider: string;
  roles: string;
  shop: Array<ShopsModel>;
  updated: Date;
  created: Date;
  cupcoin: number;
}

export class FaceBookUserModel {
  email: string;
  id: string;
  first_name: string;
  last_name: string;
  name: string;
  picture: {
    data: { url: string; }
  }
}
