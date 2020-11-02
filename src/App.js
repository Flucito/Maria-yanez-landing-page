import React from 'react';
import { Nav } from './components/Nav';
import { News } from './components/News';
import Slider from './components/Slider';

const App = () => {
  return (
    <div >
      <Nav />
      <Slider />
      <h1 className="title">Noticias</h1>
      <News />
    </div>


  )
}

export default App