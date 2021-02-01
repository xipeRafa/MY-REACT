import React, { useState } from 'react'




const App = () => {
  const [ active, setActive ] = useState(false)

  const toggle = () => setActive(!active)

  return (
    <div>
      <Button>
        Un Boton
      </Button>
      <Button onClick={toggle} active={active}>
        Toggle
      </Button>
    </div>
  )
}

export default App