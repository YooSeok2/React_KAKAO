import React from 'react';
import './App.css';
import Banner from './components/banner';
import Summary from './components/summary';
import Service from './components/service';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Banner/>
      <Summary/>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;
