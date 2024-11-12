import { useState } from "react";

const NumberOfEvents = ({currentNOE, setCurrentNOE }) => {
  const [number, setNumber] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    setCurrentNOE(value);
  };

  return (
    <div id="event-numbers">
      <input
        type="text"
        className="number-input"
        placeholder="Number of Events"
        value={number}
        onChange={handleInputChanged}      
      />
    </div>
  );
}

export default NumberOfEvents;
