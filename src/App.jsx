import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {


  return (
    <div className='w-full flex'>
      <NavigationBar />
      <div className='grow'> <Dashboard />
      </div>

    </div>
  )
}

export default App
