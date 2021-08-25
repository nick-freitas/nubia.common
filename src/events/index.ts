import { GamebookEventType } from './gamebook.event-types';
import { LibraryEventType } from './library.event-types';
import { UserEventType } from './user.event-types';

export * from './gamebook.event';
export * from './gamebook.event-types';
export * from './user.event';
export * from './user.event-types';
export * from './library.event';
export * from './library.event-types';

export type EventType = UserEventType | GamebookEventType | LibraryEventType