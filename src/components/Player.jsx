
import { useState } from 'react';

export default function Player() {

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const [submitted, setSubmitted] = useState(false);

  function handleClick() {
    setSubmitted(true);
  }

  function handleChange (event) {
    setSubmitted(false); // done cuz if it is not done so the whenever the input field changes the target position will also changes so it restrict for doing so and the submitted value is in 
    // false state so it will reflect the unkonown entity only right now. 
    
    setEnteredPlayerName(event.target.value);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" 
        onChange={handleChange} 
        value={enteredPlayerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
