import { EventType } from "./event-type";

export interface NubiaEvent {
  type: EventType;
  data: any;
  auth?: {
    access_token?: string;
    userId: string;
    exp: number;
  };
}
