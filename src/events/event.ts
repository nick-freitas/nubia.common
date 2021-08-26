import { EventType } from "./event-type";

export interface NubiaEvent {
  type: EventType;
  data: any;
  access_token?: string;
}
