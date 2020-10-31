import React from 'react'
import DisplayShows from './DisplayShows'
import Header from './Header'
import ViaplayHeader from './Header'
import Footer from "./Footer";
// import { Header } from 'semantic-ui-react';
const App = () => {
  return (
    <>
      {/* <ViaplayHeader/> */}
      <Header/>
      <DisplayShows/>
      <Footer/>
    </>
  )
}

export default App

