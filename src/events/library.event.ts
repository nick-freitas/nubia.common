import { NubiaEvent } from './event';
import { LibraryEventType } from './library.event-types';

export interface LibraryEvent extends NubiaEvent {
    type: LibraryEventType,
    data: any
}

export interface GetUserLibraryEvent extends LibraryEvent {
    type: LibraryEventType.GET_USER_LIBRARY,
    data: {
        userId: string,
    }
}
export const isGetUserLibraryEvent = (e: NubiaEvent): e is GetUserLibraryEvent => e.type === LibraryEventType.GET_USER_LIBRARY

export interface AddBookToLibraryEvent extends LibraryEvent {
    type: LibraryEventType.ADD_BOOK_TO_LIBRARY,
    data: {
        userId: string,
        gamebookId: string
    }
}
export const isAddBookToLibraryEvent = (e: NubiaEvent): e is AddBookToLibraryEvent => e.type === LibraryEventType.ADD_BOOK_TO_LIBRARY

export interface RemoveBookFromLibraryEvent extends LibraryEvent {
    type: LibraryEventType.REMOVE_BOOK_FROM_LIBRARY,
    data: {
        userId: string,
        gamebookId: string
    }
}
export const isRemoveBookFromLibraryEvent = (e: NubiaEvent): e is RemoveBookFromLibraryEvent => e.type === LibraryEventType.REMOVE_BOOK_FROM_LIBRARY

