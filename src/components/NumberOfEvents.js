import { useState } from "react";

const NumberOfEvents = () => {
  
  const input = (event) => {
    let value = event.target.value
    setNumber(value);
  }

  const [number, setNumber] = useState("32");
  
  return (
    <div id="event-numbers">
      <input
        type="text"
        className="number-input"
        placeholder="Number of Events"
        value={number}
        onChange={input}      
      />
    </div>

  );
}

export default NumberOfEvents;