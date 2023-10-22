import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';

//== IMPORT COMPONENTS ==
import Header from './app/components/Header';
import Login from './app/components/Login';
import VerifyEmail from './app/components/VerifyEmail';
import Home from './app/components/Home';

import './App.scss';

function App() {

  // == CALL STORE ==
  const { isOpenLogin, isOpenSignup } = useAppSelector(state => state.modalDisplayReducer);

  return (
    <div className="App">
      <Header />
      {((isOpenLogin || isOpenSignup) && <Login />)}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/verify-email' element= {<VerifyEmail/>}/>
      </Routes>
    </div>
  );
}

export default App;
