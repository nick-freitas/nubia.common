import { EventType } from '../events/event-type';
import { BadRequestException } from './bad-request.exception';

export class OutOfOrderEventException extends BadRequestException {
  
  constructor(
    eventType: EventType,
    expectedVersion: number,
    actualVersion: number
  ) {
    super(
      `${eventType} - Expected Version ${expectedVersion} but got ${actualVersion} instead`,
      "Out of Order Event Exception",
    );
  }
}