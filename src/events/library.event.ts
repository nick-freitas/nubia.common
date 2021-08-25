import { LibraryEventType } from './library.event-types';

export interface LibraryEvent {
    type: LibraryEventType,
    data: any
}

export interface GetUserLibraryEvent extends LibraryEvent {
    type: LibraryEventType.GET_USER_LIBRARY,
    data: {
        userId: string,
    }
}
export const isGetUserLibraryEvent = (e: LibraryEvent): e is GetUserLibraryEvent => e.type === LibraryEventType.GET_USER_LIBRARY

export interface AddBookToLibraryEvent extends LibraryEvent {
    type: LibraryEventType.ADD_BOOK_TO_LIBRARY,
    data: {
        userId: string,
        gamebookId: string
    }
}
export const isAddBookToLibraryEvent = (e: AddBookToLibraryEvent): e is AddBookToLibraryEvent => e.type === LibraryEventType.ADD_BOOK_TO_LIBRARY

export interface RemoveBookFromLibraryEvent extends LibraryEvent {
    type: LibraryEventType.REMOVE_BOOK_FROM_LIBRARY,
    data: {
        userId: string,
        gamebookId: string
    }
}
export const isRemoveBookFromLibraryEvent = (e: RemoveBookFromLibraryEvent): e is RemoveBookFromLibraryEvent => e.type === LibraryEventType.REMOVE_BOOK_FROM_LIBRARY

