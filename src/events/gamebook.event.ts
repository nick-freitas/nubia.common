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
        fullname: string,
        email: string,
        password: string,
    }
}
export const isCreateGamebookEvent = (e: GamebookEvent): e is CreateGamebookEvent => e.type === GamebookEventType.CREATE_GAMEBOOK

export interface UpdateGamebookEvent extends GamebookEvent {
    type: GamebookEventType.UPDATE_GAMEBOOK,
    data: {
        id: string,
        fullname: string,
    }
}
export const isUpdateGamebookEvent = (e: GamebookEvent): e is UpdateGamebookEvent => e.type === GamebookEventType.UPDATE_GAMEBOOK

export interface GamebookCreatedEvent extends GamebookEvent {
    type: GamebookEventType.GAMEBOOK_CREATED,
    data: {
        id: string,
        fullname: string,
        email: string,
    }
}
export const isGamebookCreatedEvent = (e: GamebookEvent): e is GamebookCreatedEvent => e.type === GamebookEventType.GAMEBOOK_CREATED

export interface GamebookUpdatedEvent extends GamebookEvent {
    type: GamebookEventType.GAMEBOOK_UPDATED,
    data: {
        id: string,
        fullname: string,
    }
}
export const isGamebookUpdatedEvent = (e: GamebookEvent): e is GamebookUpdatedEvent => e.type === GamebookEventType.GAMEBOOK_UPDATED
