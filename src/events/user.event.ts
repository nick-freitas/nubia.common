import { User } from '../models';
import { NubiaEvent } from './event';
import { UserEventType } from './user.event-types';

export interface UserEvent extends NubiaEvent {
    type: UserEventType,
    data: Partial<User>
}

export interface CreateUserEvent extends UserEvent {
    type: UserEventType.CREATE_USER,
    data: {
        id: string,
        fullName: string,
        email: string,
        password: string,
    }
}
export const isCreateUserEvent = (e: NubiaEvent): e is CreateUserEvent => e.type === UserEventType.CREATE_USER

export interface UpdateUserEvent extends UserEvent {
    type: UserEventType.UPDATE_USER,
    data: {
        id: string,
        fullName?: string,
    }
}
export const isUpdateUserEvent = (e: NubiaEvent): e is UpdateUserEvent => e.type === UserEventType.UPDATE_USER

export interface UserCreatedEvent extends UserEvent {
    type: UserEventType.USER_CREATED,
    data: {
        id: string,
        fullName: string,
        email: string,
        version: number
    }
}
export const isUserCreatedEvent = (e: NubiaEvent): e is UserCreatedEvent => e.type === UserEventType.USER_CREATED

export interface UserUpdatedEvent extends UserEvent {
    type: UserEventType.USER_UPDATED,
    data: {
        id: string,
        fullName: string,
        version: number
    }
}
export const isUserUpdatedEvent = (e: NubiaEvent): e is UserUpdatedEvent => e.type === UserEventType.USER_UPDATED
