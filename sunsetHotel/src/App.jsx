import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import AddRoom from './components/room/AddRoom'
import ExistingRooms from './components/room/ExistingRooms';

function App() {
  const [count, setCount] = useState(0)

  return <>

  <AddRoom/>
  <ExistingRooms/>
  
  
  </>
}

export default App
