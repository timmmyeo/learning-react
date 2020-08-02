import React from "react"

function Joke(props) {
  return (
    <div className="joke">
      <h3 className="question">{props.question}</h3>
      <p className="punchline">{props.punchline}</p>
    </div>
  )
}

export default Joke 