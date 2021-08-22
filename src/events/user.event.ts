import { User } from '../models';
import { UserEventType } from './users.event-types';

export interface UserEvent {
    type: UserEventType,
    data: User
}