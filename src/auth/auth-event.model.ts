import { AuthRoles } from "./auth-roles";

export interface AuthEventModel {
  access_token?: string;
  userId: string;
  exp: number;
  role: AuthRoles[];
}
