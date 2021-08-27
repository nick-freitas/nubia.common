import { NubiaEvent } from "./event";
import { ChapterEventType } from "./chapter.event-types";

export interface ChapterEvent extends NubiaEvent {
  type: ChapterEventType;
  data: any;
}
