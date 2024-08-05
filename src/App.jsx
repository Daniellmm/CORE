import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/home'
import Deals from './components/deals'
import About from './components/About'
import Menu from './components/Menu'
import Offer from './components/Offer'
import Footer from './components/Footer'
import Hotcard from './components/Hotcard'


const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
         <About />
        </div>

        {/* <div>
          <Hotcard />
        </div>
         */}
        <div id="deal">
          <Deals />
        </div>

        <div>
          <Offer />
        </div>

        <div id="product">
          <Menu />
        </div>



      </main>


      <Footer />

    </div>
  )
}

export default App