import { User } from '../models';
import { UserEventType } from './users.event-types';

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
        fullname: string,
    }
}
export const isUpdateUserEvent = (e: UserEvent): e is UpdateUserEvent => e.type === UserEventType.UPDATE_USER
