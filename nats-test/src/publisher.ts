import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

const stan = nats.connect('ticketing', '123', { url: 'http://localhost:4222' });

stan.on('connect', async () => {
  const publisher = new TicketCreatedPublisher(stan);
  console.log('Publisher connected to Nats');
  try {
    await publisher.publish({
      id: '123',
      title: 'concert',
      price: 20,
    });
  } catch (err) {
    console.log(err);
  }
});
