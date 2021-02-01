import React, { useState, useEffect } from 'react'



const App = () => {
  const [ users, setUsers ] = useState([])
  const [ isFetching, setFetching ] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setUsers(users)
        setFetching(false)
      })
  }, [])

  return (  
    <div>
    
      { isFetching && <h1>Cargando...</h1> }
      <ul>
        { users.map(user => (
          <li key={user.id}>
            { user.name }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App