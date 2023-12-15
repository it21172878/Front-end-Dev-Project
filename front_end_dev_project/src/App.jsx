// import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
      </main>
    </div>
  );
};

export default App;
