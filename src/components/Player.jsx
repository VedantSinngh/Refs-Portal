
// import { useState } from 'react';

// export default function Player() {

//   const [enteredPlayerName, setEnteredPlayerName] = useState(null);

//   const [submitted, setSubmitted] = useState(false);

//   function handleClick() {
//     setSubmitted(true);
//   }

//   function handleChange (event) {
//     setSubmitted(false); // done cuz if it is not done so the whenever the input field changes the target position will also changes so it restrict for doing so and the submitted value is in 
//     // false state so it will reflect the unkonown entity only right now. 
    
//     setEnteredPlayerName(event.target.value);
//   }
//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
//       <p>
//         <input type="text" 
//         onChange={handleChange} 
//         value={enteredPlayerName}/>
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }

{/*The key difference between the two code snippets lies in their approach to managing and accessing the input field value. The first snippet uses `useState` to manage the state of the input field, updating it on every 
  `onChange` event and reflecting the latest value in real-time, which ensures reactivity. The second snippet uses `useRef` to directly reference the DOM element, avoiding state updates during input changes and only capturing the value when the button is clicked.
  While the `useState` approach ensures controlled input and real-time state synchronization, the `useRef` approach is simpler and avoids unnecessary re-renders but sacrifices reactivity for the input value. */}

import { useState, useRef } from 'react';

export default function Player() {

  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  
  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''; // clearing the text area whenver the set name button is clicked.
    // v r here voilating a rule of react that it should handle things by its own.
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" 
        ref={playerName} 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
