import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import Blog from './components/Blog'

const App = () => {
  return (
    <Provider store={store}>
      <div>
  
        <Blog />
      </div>
    </Provider>
  )
}

export default App