import { render } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event';


describe('<Event /> component', () => {
  let EventComponent;
  const event = mockData;
  beforeEach(() => {
    EventComponent = render(<Event event = {event[0]} />);
  })

  // Feature 2
  test('event details are collapsed by default', () => {
    const eventDetails = EventComponent.container.querySelector('.details');
     expect(eventDetails).not.toBeInTheDocument(); 
   });

  test('event includes event description', () => { 
    expect(EventComponent.queryByText(event[0].summary)).toBeInTheDocument();
  });

  test('event includes location', () => {
    expect(EventComponent.queryByText(event[0].location)).toBeInTheDocument();
  });

  test('event includes start time', () => {
    expect(EventComponent.queryByText(event[0].created)).toBeInTheDocument();
  });

  test('checking if button exists', () => {
    expect(EventComponent.queryByRole('button')).toBeInTheDocument();
  })

  test('checking if button has "Show details" text', () => {
    expect (EventComponent.queryByText('Show details')).toBeInTheDocument ();
  });

  test('Show/hide event details when button is clicked', async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByRole('button');

    // Simulate button click to show details
    await user.click(button);

    // Check if event details are now in the document
    const eventDetails = EventComponent.container.firstChild;
    const details = eventDetails.querySelector('.details');
    expect(details).toBeInTheDocument();
    expect(details).not.toBeEmptyDOMElement(); // Checking if event description is passed to .details

    // Check if button text changes to "Hide details"
    expect(button).toHaveTextContent('Hide details');

    // Check if details are hidden when button is clicked again
    await user.click(button);
    expect(details).not.toBeInTheDocument();
    expect(button).toHaveTextContent('Show details');
  });
});