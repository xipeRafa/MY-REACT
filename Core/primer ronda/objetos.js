import { objectOf } from 'prop-types'
import React, { useState, useEffect} from 'react'



const App = () => {
  const [ state, setState ] = useState({
    clicks: 0,
    title: ''
  })

  const merge = (nextState) => {
    setState({
      ...state,
      ...nextState
    })
  }

  const addClicks = () => {
    merge({
      clicks: state.clicks + 1
    })
  }

  const handleInput = (e) => {
    const title = e.target.value
        merge({
      title
    })
  }

/*   se renderea con la notacion de punto objectOf.variable----
  se le saca copia con ...spread, 
                        variable
                        (dentro de las funcionesEvento) */

  return (
    <div>
      <input
        type="text"
        value={state.title}
        onChange={handleInput}  
      />
      <button onClick={addClicks}>
        Clicks ({ state.clicks })
      </button>
      <h3>{ state.title }</h3>
    </div>
  )
}

export default App