import React, { useState, useEffect, useLayoutEffect } from 'react'



const App = () => {
  const [ count, setState ] = useState(0)

  useEffect(() => {
    console.log('useEffect 1')
  }, [ count ])

  useEffect(() => {
    console.log('useEffect 2')
  }, [ count ])

  // useEffect -> asincrono
  // useEffect -> se ejecuta despues de que se actualiza DOM
  // useLayoutEffect -> sincrono
  // useLayoutEffect -> se ejecuta antes de la actualizacion DOM

  useLayoutEffect(() => {
    console.log('useLayoutEffect 1')
  }, [ count ])

  useLayoutEffect(() => {
    console.log('useLayoutEffect 2')
  }, [ count ])

  const add = () => setState(count + 1)

  return (
    <div>
      <button onClick={add}>
        Add ({ count })
      </button>
    </div>
  )
}

export default App