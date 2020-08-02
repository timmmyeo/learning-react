import React from "react";
import Joke from "./Joke.js";
import Header from "./Header.js";

function App() {
  return (
    <div>
      <Header />
      <Joke 
        question="What’s the best thing about Switzerland?"
        punchline="I don’t know, but the flag is a big plus."
      />
      <Joke
        question="How many times can you subtract 10 from 100?"
        punchline="Once. The next time you would be subtracting 10 from 90."
      />
      <Joke
        question="Did you hear about the actor who fell through the floorboards?"
        punchline="He was just going through a stage."
      />
      <Joke
        punchline="Punch!"
      />
    </div>
    
  )
}

export default App