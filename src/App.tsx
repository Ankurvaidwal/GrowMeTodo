import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserForm from './Pages/UserForm';
import DisplayJson from './Pages/DisplayJson';
import Indeterminate from "./components/Indeterminate";
import Header from './components/Header';
// import DummyBar from './components/dummyBar';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' Component={UserForm} />
        <Route path='/display-data' Component={DisplayJson} />
        <Route path='/nav' Component={Indeterminate} />
      </Routes>
    </Router>
  )
}

export default App
