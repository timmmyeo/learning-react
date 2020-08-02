import React from "react"

function App() {
    return (
        <div>
            <img onMouseOver={() => alert("Woah!")}src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={() => alert("Hello!")}>Click me</button>
        </div>
    )
}

export default App
