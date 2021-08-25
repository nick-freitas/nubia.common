import { GamebookEventType } from "./gamebook.event-types";
import { LibraryEventType } from "./library.event-types";
import { UserEventType } from "./user.event-types";

export type EventType = UserEventType | GamebookEventType | LibraryEventType;
