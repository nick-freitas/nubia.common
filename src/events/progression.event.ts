import { NubiaEvent } from "./event";
import { ProgressionEventType } from "./progression.event-types";

export interface ProgressionEvent extends NubiaEvent {
  type: ProgressionEventType;
  data: any;
}
