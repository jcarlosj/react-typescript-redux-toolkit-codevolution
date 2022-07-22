import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import CakeView from './features/cake/CakeView';
import IcecreamView from './features/icecream/IcecreamView';
import UserView from './features/user/UserView';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="store-app">
        <h2>Tienda de pasteles y helados</h2>
        <div className="store">
          <CakeView />
          <IcecreamView />
        </div>
      </div>
      <UserView />
    </div>
  )
}

export default App
