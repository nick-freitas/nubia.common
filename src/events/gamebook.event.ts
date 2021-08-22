import { Gamebook } from '../models';
import { GamebookEventType } from './gamebook.event-types';


export interface GamebookEvent {
    type: GamebookEventType,
    data: Gamebook
}