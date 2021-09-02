import { AuthRoles } from "../auth/auth-roles";
import { NubiaEvent } from "./event";
import { UserEventType } from "./user.event-types";

export interface UserEvent extends NubiaEvent {
  type: UserEventType;
}

export interface CreateUserEvent extends UserEvent {
  type: UserEventType.CREATE_USER;
  data: {
    id: string;
    fullName: string;
    email: string;
    password: string;
  };
}
export const isCreateUserEvent = (e: NubiaEvent): e is CreateUserEvent =>
  e.type === UserEventType.CREATE_USER;

export interface UpdateUserEvent extends UserEvent {
  type: UserEventType.UPDATE_USER;
  data: {
    id: string;
    fullName?: string;
  };
}
export const isUpdateUserEvent = (e: NubiaEvent): e is UpdateUserEvent =>
  e.type === UserEventType.UPDATE_USER;

export interface UserCreatedEvent extends UserEvent {
  type: UserEventType.USER_CREATED;
  data: {
    id: string;
    fullName: string;
    email: string;
    version: number;
    roles: AuthRoles;
  };
}
export const isUserCreatedEvent = (e: NubiaEvent): e is UserCreatedEvent =>
  e.type === UserEventType.USER_CREATED;

export interface UserUpdatedEvent extends UserEvent {
  type: UserEventType.USER_UPDATED;
  data: {
    id: string;
    fullName: string;
    version: number;
    roles: AuthRoles[];
  };
}
export const isUserUpdatedEvent = (e: NubiaEvent): e is UserUpdatedEvent =>
  e.type === UserEventType.USER_UPDATED;

export interface SignInUserEvent extends UserEvent {
  type: UserEventType.SIGN_IN_USER;
  data: {
    email: string;
    password: string;
  };
}
export const isSignInUserEvent = (e: NubiaEvent): e is SignInUserEvent =>
  e.type === UserEventType.SIGN_IN_USER;

export interface SignOutUserEvent extends UserEvent {
  type: UserEventType.SIGN_OUT_USER;
  data: {};
}
export const isSignOutUserEvent = (e: NubiaEvent): e is SignOutUserEvent =>
  e.type === UserEventType.SIGN_OUT_USER;
