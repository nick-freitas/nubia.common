import { AuthRoles } from "../auth/auth-roles";

export interface PublicUser {
  id: string;
  fullName: string;
}

export interface User extends PublicUser {
  email: string;
  password?: string;
  createdAt?: Date;
  active?: boolean;
  version: number;
  roles: AuthRoles[];
}

export interface AuthorizedUser extends User {
  access_token: string;
}
