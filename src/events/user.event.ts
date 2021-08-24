import { User } from '../models';
import { UserEventType } from './user.event-types';

export interface UserEvent {
    type: UserEventType,
    data: Partial<User>
}

export interface CreateUserEvent extends UserEvent {
    type: UserEventType.CREATE_USER,
    data: {
        id: string,
        fullname: string,
        email: string,
        password: string,
    }
}
export const isCreateUserEvent = (e: UserEvent): e is CreateUserEvent => e.type === UserEventType.CREATE_USER

export interface UpdateUserEvent extends UserEvent {
    type: UserEventType.UPDATE_USER,
    data: {
        id: string,
        fullname?: string,
    }
}
export const isUpdateUserEvent = (e: UserEvent): e is UpdateUserEvent => e.type === UserEventType.UPDATE_USER

export interface UserCreatedEvent extends UserEvent {
    type: UserEventType.USER_CREATED,
    data: {
        id: string,
        fullname: string,
        email: string,
        version: number
    }
}
export const isUserCreatedEvent = (e: UserEvent): e is UserCreatedEvent => e.type === UserEventType.USER_CREATED

export interface UserUpdatedEvent extends UserEvent {
    type: UserEventType.USER_UPDATED,
    data: {
        id: string,
        fullname: string,
        version: number
    }
}
export const isUserUpdatedEvent = (e: UserEvent): e is UserUpdatedEvent => e.type === UserEventType.USER_UPDATED
