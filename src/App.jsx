import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import CoinPage from './pages/coinPage'
import Homepage from './pages/Homepage'

export default function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={ <Homepage /> } exact />
          <Route path='/coins/:id' element={ <CoinPage /> } />
        </Routes>       
      </div>
    </BrowserRouter>
  )
}

