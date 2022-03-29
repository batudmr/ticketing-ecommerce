import { Publisher, Subjects, TicketCreatedEvent } from '@ticketman/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
