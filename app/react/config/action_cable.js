import { ActionCable, Cable } from 'action-cable-react';

const consumer = ActionCable.createConsumer('/cable');

const cable = new Cable({
  ExampleChannel: consumer.subscriptions.create({
    channel: 'ExampleChannel',
    room: 'ExampleRoom'
  }, [ 'exampleMessage' ])
});

export default cable;
