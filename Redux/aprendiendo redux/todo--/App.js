import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import Todos from './components/Todos'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Todos />
      </div>
    </Provider>
  )
}

export default App