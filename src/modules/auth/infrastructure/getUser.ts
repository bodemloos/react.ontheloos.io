import { httpService } from "utils";

import { IUser } from "../types";
import { IUserDto } from "./types/IUserDto";

export const getUser = () => {
  // mocking current user
  return httpService
    .get<IUserDto>("users/1")
    .then(({ password, ...user }) => user as IUser);
};
