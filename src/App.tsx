import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import Header from './components/Header';
// import DummyBar from './components/dummyBar';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' Component={FirstPage} />
        <Route path='/display-data' Component={SecondPage} />
      </Routes>
    </Router>
  )
}

export default App
