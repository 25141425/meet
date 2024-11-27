import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let EventNumberComponent;
  beforeEach(() => {
    EventNumberComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={() => {}}  setErrorAlert={() => { }} />);
  })

  test('renders input field for event number', () => {
    const numberInput = EventNumberComponent.queryByRole('textbox');
    expect(numberInput).toBeInTheDocument();
    expect(numberInput).toHaveClass('number-input');
  });

  test('check if default value of input is 32', () => {
    const numberInput = EventNumberComponent.queryByRole('textbox');
    expect(numberInput).toHaveValue("32");
  })

  test('textbox value changes according to what user types', async () => {
    const user = userEvent.setup();
    const numberInput = EventNumberComponent.queryByRole('textbox');

    await user.type(numberInput, '{backspace}{backspace}10');
    expect(numberInput.value).toBe('10');
  });
});
