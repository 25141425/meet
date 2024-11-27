import { useState } from "react";

const NumberOfEvents = ({currentNOE, setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);

    let errorText;
    if(value <= 0 || isNaN(value)) {
      errorText = "Please type a number"
    } else {
      errorText ="";
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
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
