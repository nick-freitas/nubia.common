import { AuthEventModel } from "../auth/auth-event.model";
import { EventType } from "./event-type";

export interface NubiaEvent {
  type: EventType;
  data: any;
  auth?: AuthEventModel;
}
