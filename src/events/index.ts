import { GamebookEventType } from './gamebook.event-types';
import { UserEventType } from './user.event-types';

export * from './gamebook.event';
export * from './gamebook.event-types';
export * from './user.event';
export * from './user.event-types';

export type EventType = UserEventType | GamebookEventType