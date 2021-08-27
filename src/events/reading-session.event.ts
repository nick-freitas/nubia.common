import { Progression } from "../models";
import { NubiaEvent } from "./event";
import { ReadingSessionEventType } from "./reading-session.event-types";

export interface ReadingSessionEvent extends NubiaEvent {
  type: ReadingSessionEventType;
  data: any;
}

export interface ResetChoicesEvent extends ReadingSessionEvent {
  type: ReadingSessionEventType.RESET_CHOICES;
  data: {
    gamebookId: string;
  };
}
export const isResetChoicesEvent = (e: NubiaEvent): e is ResetChoicesEvent =>
  e.type === ReadingSessionEventType.RESET_CHOICES;

export interface UndoChoiceEvent extends ReadingSessionEvent {
  type: ReadingSessionEventType.UNDO_CHOICE;
  data: {
    gamebookId: string;
  };
}
export const isUndoChoiceEvent = (e: NubiaEvent): e is UndoChoiceEvent =>
  e.type === ReadingSessionEventType.UNDO_CHOICE;

export interface MakeChoiceEvent extends ReadingSessionEvent {
  type: ReadingSessionEventType.MAKE_CHOICE;
  data: {
    gamebookId: string;
    progression: Progression;
  };
}
export const isMakeChoiceEvent = (e: NubiaEvent): e is MakeChoiceEvent =>
  e.type === ReadingSessionEventType.MAKE_CHOICE;
