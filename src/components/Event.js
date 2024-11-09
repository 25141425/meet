import { useState } from "react";

const Event = ({event}) => {
  const [showDetails, SetShowDetails] = useState(false);

  return (
    <li>
      <h1 className="summary">{event.summary}</h1>
      <p className="location">{event.location}</p>
      <p className="start-time">{event.created}</p>
      {showDetails ? (
        <p className="details">{event.description}</p>
      ) : null}

      <button  onClick={() => SetShowDetails(!showDetails)}>{showDetails ? "Hide details" : "Show details"}</button>
    </li>
    
    
  );
}

export default Event;