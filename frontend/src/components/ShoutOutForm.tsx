import { FormEvent, useState, useRef } from "react";
import ShoutOut from "../model/ShoutOut";
import firebase from "../firebaseConfig";

interface Props {
  onSubmit: (shoutOut: ShoutOut) => void;
}

function ShoutOutForm({ onSubmit }: Props) {
  const [ to, setTo ] = useState("");
  const [ from, setFrom ] = useState("");
  const [ message, setMessage ] = useState("");
  const imageInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event:FormEvent): void {

    event.preventDefault();
    const shoutOut: ShoutOut = {
      to: to,
      from: from,
      message: message
    }

    const files = imageInputRef.current?.files;
    if (files && files[0]) {
      const imageFile = files[0];

      const rootFolder = firebase.storage().ref();
      const imageFolder = rootFolder.child("image-files");
      imageFolder.child(imageFile.name).put(imageFile).then (snapshot => {
        snapshot.ref.getDownloadURL().then(url => {
          shoutOut.image = url;
          onSubmit(shoutOut);
          clearForm();
        })
      })
    } else {
      onSubmit(shoutOut);
      clearForm();
    }
    function clearForm() {
      setTo("");
      setFrom("");
      setMessage("");
      formRef.current?.reset();
    }
  }

  

  return (
    <form className="ShoutOutForm" onSubmit={handleSubmit} ref={formRef}>
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
        <label htmlFor="ShoutOutForm_image">Add an Image</label>
        <input id="ShoutOutForm_image"  type="file" ref={imageInputRef}/>
      </p>

      <p>
        <button type="submit">Create Shout Out</button>
      </p>
    </form>
  );
}

export default ShoutOutForm;