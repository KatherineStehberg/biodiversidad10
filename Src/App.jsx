import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import SliderSection from './components/SliderSection';
import FeaturedProducts from './components/FeaturedProducts';
import FeaturedServices from './components/FeaturedServices';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
        <SliderSection />
        <FeaturedProducts />
        <FeaturedServices />
      </main>
      <Footer />
    </div>
  );
}

export default App;
