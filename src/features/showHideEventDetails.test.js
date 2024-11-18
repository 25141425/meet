// Feature 2

import { loadFeature, defineFeature } from 'jest-cucumber';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import mockData from '../mock-data';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, then }) => {

    let EventComponent;
    const event = mockData;
    given('the user is on the events page', () => {
      EventComponent = render(<Event event = {event[0]} />);
    });

    then('each event element should be collapsed by default', () => {
    const eventDetails = EventComponent.container.querySelector('.details');
     expect(eventDetails).not.toBeInTheDocument(); 
    });
  });

  test('User can expand an event to see details', ({ given, when, then }) => {

    let EventComponent;
    const event = mockData;  
    given('the user is on the events page and an event element is collapsed', () => {
      EventComponent = render(<Event event = {event[0]} />);
      const eventDetails = EventComponent.container.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument(); 
    });
    
    when('the user clicks on the event element', async () => {
      const user = userEvent.setup();
      const button = EventComponent.queryByRole('button');
      await user.click(button);
    });

    then('the event element should expand to show details', () => {
      const eventDetails = EventComponent.container.firstChild;
      const details = eventDetails.querySelector('.details');
      expect(details).toBeInTheDocument();
      expect(details).not.toBeEmptyDOMElement(); 
    });
  });

  test('User can collapse an event to hide details', ({ given, when, then }) => {
    
    let EventComponent;
    const event = mockData;
    given('the user has expanded an event to view its details', async () => {
      EventComponent = render(<Event event={event[0]} />);
      const user = userEvent.setup();
      const button = EventComponent.queryByRole('button');
      await user.click(button);
      const eventDetails = EventComponent.container.querySelector('.details');
      expect(eventDetails).toBeInTheDocument(); 
    });

    when('the user clicks on the expanded event element', async () => {
      const user = userEvent.setup();
      const button = EventComponent.queryByRole('button');
      await user.click(button);
    });

    then('the event element should collapse to hide the details', () => {
      const eventDetails = EventComponent.container.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});