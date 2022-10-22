import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import CoinPage from './pages/coinPage'
import Homepage from './pages/Homepage'



  const useStyles = makeStyles({
    App: {
      minHeight: "100vh",
      backgroundColor: "#14161a",
      color: "white",
    },
  });

export default function App() {

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path='/' element={ <Homepage /> } exact />
          <Route path='/coins/:id' element={ <CoinPage /> } />
        </Routes>       
      </div>
    </BrowserRouter>
  )
}

