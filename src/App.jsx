

import './App.css'
import { useSelector } from 'react-redux'
import Home from './components/Home/Home'
import Bounes from './components/Bounes/bounes'
import Reward from './components/Reward/reward'

function App() {
  const amount = useSelector(state=>state.account.amount)
  
  return (
    <>
     <h1>Amount:{amount}</h1>
     <Home></Home>
     <Bounes></Bounes>
     <Reward></Reward>
    </>
  )
}

export default App
