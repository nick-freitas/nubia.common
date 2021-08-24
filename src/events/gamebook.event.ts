import { Gamebook } from '../models';
import { GamebookEventType } from './gamebook.event-types';

export interface GamebookEvent {
    type: GamebookEventType,
    data: Partial<Gamebook>
}

export interface CreateGamebookEvent extends GamebookEvent {
    type: GamebookEventType.CREATE_GAMEBOOK,
    data: {
        id: string,
        title: string,
        description?: string,
        price?: number,
        imageSrc?: string
    }
}
export const isCreateGamebookEvent = (e: GamebookEvent): e is CreateGamebookEvent => e.type === GamebookEventType.CREATE_GAMEBOOK

export interface UpdateGamebookEvent extends GamebookEvent {
    type: GamebookEventType.UPDATE_GAMEBOOK,
    data: {
        id: string,
        title: string,
        description?: string,
        price?: number,
        imageSrc?: string
    }
}
export const isUpdateGamebookEvent = (e: GamebookEvent): e is UpdateGamebookEvent => e.type === GamebookEventType.UPDATE_GAMEBOOK

export interface GamebookCreatedEvent extends GamebookEvent {
    type: GamebookEventType.GAMEBOOK_CREATED,
    data: {
        id: string,
        title: string,
        description?: string,
        price?: number,
        imageSrc?: string,
        version: number
    }
}
export const isGamebookCreatedEvent = (e: GamebookEvent): e is GamebookCreatedEvent => e.type === GamebookEventType.GAMEBOOK_CREATED

export interface GamebookUpdatedEvent extends GamebookEvent {
    type: GamebookEventType.GAMEBOOK_UPDATED,
    data: {
        id: string,
        title: string,
        description?: string,
        price?: number,
        imageSrc?: string,
        version: number
    }
}
export const isGamebookUpdatedEvent = (e: GamebookEvent): e is GamebookUpdatedEvent => e.type === GamebookEventType.GAMEBOOK_UPDATED


export interface ResetGamebookChoiceEvent extends GamebookEvent {
    type: GamebookEventType.RESET_GAMEBOOK_CHOICES,
    data: {
        id: string,
    }
}
export const isResetGamebookChoiceEvent = (e: GamebookEvent): e is ResetGamebookChoiceEvent => e.type === GamebookEventType.RESET_GAMEBOOK_CHOICES

export interface UndoLastGamebookChoiceEvent extends GamebookEvent {
    type: GamebookEventType.UNDO_LAST_GAMEBOOK_CHOICE,
    data: {
        id: string
    }
}
export const isUndoLastGamebookChoiceEvent = (e: GamebookEvent): e is UndoLastGamebookChoiceEvent => e.type === GamebookEventType.UNDO_LAST_GAMEBOOK_CHOICE

export interface MakeGamebookChoiceEvent extends GamebookEvent {
    type: GamebookEventType.MAKE_GAMEBOOK_CHOICE,
    data: {
        id: string,
        progressionId: string
    }
}
export const isMakeGamebookChoiceEvent = (e: GamebookEvent): e is MakeGamebookChoiceEvent => e.type === GamebookEventType.MAKE_GAMEBOOK_CHOICE
