import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import AccountCreation from './pages/AccountCreation/AccountCreation'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<AccountCreation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
