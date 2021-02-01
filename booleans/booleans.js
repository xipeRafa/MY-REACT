import React, { useState } from 'react'



const App = () => {
  const [ isActive, setActive ] = useState(false)

  const toggle = () => {
    setActive(!isActive)
  }

  return (
    <div>
      { isActive && <Header /> }
      <button onClick={toggle}>
        { isActive ? 'Desactivar' : 'Activar' }
      </button>
    </div>
  )
}

export default App