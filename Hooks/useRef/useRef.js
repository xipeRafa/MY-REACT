import React, { useRef } from 'react'

const App = () => {


  const Ref = useRef()

  const focus = () => Ref.current.focus()
  const blur = () => Ref.current.blur()

  return (
    <div>

      <input
        type='text'
        placeholder='Ingresa tu texto'
        ref={Ref}
      />
      <button onClick={focus}>
        Focus
      </button>
      <button onClick={blur}>
        Blur
      </button>
    </div>
  )
}

export default App