import React from 'react';
import { Nav } from './components/Nav';
import { News } from './components/News';
import Slider from './components/Slider';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
const App = () => {
  return (
    <div >
      <Nav />
      <Slider />
      <News />
      <Form />
      <Footer />

    </div>


  )
}

export default App