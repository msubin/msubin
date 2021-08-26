import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { keepTheme } from './components/Themes'

// git push heroku main


const App = () => {

  useEffect(() => {
    keepTheme();
  })

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App;
