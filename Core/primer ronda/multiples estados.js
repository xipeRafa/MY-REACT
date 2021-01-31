import React, { useState } from 'react'


const App = () => {
  const [ clicks, setClicks ] = useState(50)
  const [ title, setTitle ] = useState(' ')

  const addClicks = () => { setClicks(clicks + 1)}

  const handleInput = (e) => { setTitle(e.target.value)}

  return (
    <div>
     
      <input
        type="text"
        value={title}
        onChange={handleInput}  
      />
      <button onClick={addClicks}>
        Clicks ({ clicks })
      </button>
      <h3>{ title }</h3>
    </div>
  )
}

export default App