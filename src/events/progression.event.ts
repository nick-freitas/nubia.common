import { NubiaEvent } from "./event";
import { ProgressionEventType } from "./progression.event-types";

export interface ProgressionEvent extends NubiaEvent {
  type: ProgressionEventType;
}

export interface CreateProgressionEvent extends ProgressionEvent {
  type: ProgressionEventType.CREATE_PROGRESSION;
  data: {};
}
export const isCreateProgressionEvent = (
  e: NubiaEvent
): e is CreateProgressionEvent =>
  e.type === ProgressionEventType.CREATE_PROGRESSION;

export interface UpdateProgressionEvent extends ProgressionEvent {
  type: ProgressionEventType.UPDATE_PROGRESSION;
  data: {};
}
export const isUpdateProgressionEvent = (
  e: NubiaEvent
): e is UpdateProgressionEvent =>
  e.type === ProgressionEventType.UPDATE_PROGRESSION;

export interface ProgressionCreatedEvent extends ProgressionEvent {
  type: ProgressionEventType.PROGRESSION_CREATED;
  data: {};
}
export const isProgressionCreatedEvent = (
  e: NubiaEvent
): e is ProgressionCreatedEvent =>
  e.type === ProgressionEventType.PROGRESSION_CREATED;

export interface ProgressionUpdatedEvent extends ProgressionEvent {
  type: ProgressionEventType.PROGRESSION_UPDATED;
  data: {};
}
export const isProgressionUpdatedEvent = (
  e: NubiaEvent
): e is ProgressionUpdatedEvent =>
  e.type === ProgressionEventType.PROGRESSION_UPDATED;

export interface GetProgressionEvent extends ProgressionEvent {
  type: ProgressionEventType.GET_PROGRESSION;
  data: {
    id: string;
  };
}
export const isGetProgressionEvent = (
  e: NubiaEvent
): e is GetProgressionEvent => e.type === ProgressionEventType.GET_PROGRESSION;
