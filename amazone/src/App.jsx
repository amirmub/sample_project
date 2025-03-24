import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Carousal from './components/Carousal/Carousal';
import Catagory from './components/Catagory/Catagory';
import Product from './components/Product';

function App() {

  return (
    <>
      <Header/>
      <Carousal />
      <Catagory />
      <Product />
    </>
  )
}

export default App;
