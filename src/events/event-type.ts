import { ChapterEventType } from "./chapter.event-types";
import { GamebookEventType } from "./gamebook.event-types";
import { LibraryEventType } from "./library.event-types";
import { ProgressionEventType } from "./progression.event-types";
import { ReadingSessionEventType } from "./reading-session.event-types";
import { UserEventType } from "./user.event-types";

export type EventType =
  | UserEventType
  | GamebookEventType
  | LibraryEventType
  | ChapterEventType
  | ProgressionEventType
  | ReadingSessionEventType;
