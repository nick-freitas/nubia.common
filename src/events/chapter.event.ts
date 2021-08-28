import { NubiaEvent } from "./event";
import { ChapterEventType } from "./chapter.event-types";

export interface ChapterEvent extends NubiaEvent {
  type: ChapterEventType;
}

export interface CreateChapterEvent extends ChapterEvent {
  type: ChapterEventType.CREATE_CHAPTER;
  data: {};
}
export const isCreateChapterEvent = (e: NubiaEvent): e is CreateChapterEvent =>
  e.type === ChapterEventType.CREATE_CHAPTER;

export interface UpdateChapterEvent extends ChapterEvent {
  type: ChapterEventType.UPDATE_CHAPTER;
  data: {};
}
export const isUpdateChapterEvent = (e: NubiaEvent): e is UpdateChapterEvent =>
  e.type === ChapterEventType.UPDATE_CHAPTER;

export interface ChapterCreatedEvent extends ChapterEvent {
  type: ChapterEventType.CHAPTER_CREATED;
  data: {};
}
export const isChapterCreatedEvent = (
  e: NubiaEvent
): e is ChapterCreatedEvent => e.type === ChapterEventType.CHAPTER_CREATED;

export interface ChapterUpdatedEvent extends ChapterEvent {
  type: ChapterEventType.CHAPTER_UPDATED;
  data: {};
}
export const isChapterUpdatedEvent = (
  e: NubiaEvent
): e is ChapterUpdatedEvent => e.type === ChapterEventType.CHAPTER_UPDATED;

export interface GetChapterEvent extends ChapterEvent {
  type: ChapterEventType.GET_CHAPTER;
  data: {
    id: string;
  };
}
export const isGetChapterEvent = (e: NubiaEvent): e is GetChapterEvent =>
  e.type === ChapterEventType.GET_CHAPTER;
