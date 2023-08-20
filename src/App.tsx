import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserForm from './components/UserForm';
import DisplayJson from './components/DisplayJson';
import HorizonatalBar from "./components/Indeterminate";
import Header from './components/Header';
// import DummyBar from './components/dummyBar';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' Component={UserForm} />
        <Route path='/display-data' Component={DisplayJson} />
        <Route path='/nav' Component={HorizonatalBar} />
      </Routes>
    </Router>
  )
}

export default App
