// Feature 3

import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyEventNumber.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 events are shown by default', ({ given, then }) => {
      let EventNumberComponent;
      given('the user has not specified a number of events to display', () => {
        EventNumberComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} />);
      });

    then('32 events should be displayed by default', () => {
      const numberInput = EventNumberComponent.queryByRole('textbox');
      expect(numberInput).toHaveValue("32");
    });
  });

  test('User can change the number of events displayed', ({ given, when, then }) => {
    
    let EventNumberComponent;
    given('the user is on the events page', () => {
      EventNumberComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} />);
    });

    when('the user specifies a number of events to display', async () => {
      const user = userEvent.setup();
      const numberInput = EventNumberComponent.queryByRole('textbox');
      await user.type(numberInput, '{backspace}{backspace}10');
    });

    then('the list of events should update to show the specified number of events', () => {
      const numberInput = EventNumberComponent.queryByRole('textbox');
      expect(numberInput.value).toBe('10');

    });
  });
});