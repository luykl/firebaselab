import { FormEvent, useState } from "react";
import ShoutOut from "../model/ShoutOut";

interface Props {
  onSubmit: (shoutOut: ShoutOut) => void;
}

function ShoutOutForm({ onSubmit }: Props) {
  const [ to, setTo ] = useState("");
  const [ from, setFrom ] = useState("");
  const [ message, setMessage ] = useState("");

  function handleSubmit(event:FormEvent): void {
    event.preventDefault();
    const shoutOut: ShoutOut = {
      to: to,
      from: from,
      message: message
    }
    onSubmit(shoutOut);

    // clear form
    setTo("");
    setFrom("");
    setMessage("");
  }

  

  return (
    <form className="ShoutOutForm" onSubmit={handleSubmit}>
      <p>
        <label htmlFor="ShoutOutForm_to">To</label>
        <input id="ShoutOutForm_to" value={to} onChange={e => setTo(e.target.value)}  />
      </p>
      <p>
        <label htmlFor="ShoutOutForm_from">From</label>
        <input id="ShoutOutForm_from" value={from} onChange={e => setFrom(e.target.value)}  />
      </p>
      <p>
        <label htmlFor="ShoutOutForm_message">Message</label>
        <textarea id="ShoutOutForm_message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
      </p>
      <p>
        <button type="submit">Create Shout Out</button>
      </p>
    </form>
  );
}

export default ShoutOutForm;