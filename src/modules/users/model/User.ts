import { v4 as uuidV4 } from "uuid";

import { ICreateUserDTO } from "../repositories/IUsersRepository";

class User {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    return {
      id: uuidV4(),
      admin: false,
      name: "",
      email: "",
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}

export { User };
