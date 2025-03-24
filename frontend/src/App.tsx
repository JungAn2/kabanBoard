import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
    </div>
  )
}

export default App
