import { AuthRoles } from "./auth-roles";

export const validate = (payload: {
  sub: string;
  email: string;
  exp: number;
  roles: AuthRoles[];
}) => ({
  userId: payload.sub,
  email: payload.email,
  expiration: payload.exp,
  roles: payload.roles,
});
