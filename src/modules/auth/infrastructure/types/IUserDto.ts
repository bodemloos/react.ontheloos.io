import { IUser } from "modules/auth/types";

// DTO => Data Transfer Object = data that's being transferred/received from the server.
export interface IUserDto extends IUser {
  password: string;
}
