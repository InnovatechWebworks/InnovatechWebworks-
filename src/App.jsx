import React, { useEffect, useRef, useState } from 'react';
import { LocomotiveScrollProvider } from './context/LocomotiveScrollContext.jsx';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';



import TopPopup from './components/TopPopup/TopPopup';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Work from './components/Work/Work';
import Services from './components/Services/Services';
import Expectations from './components/Expectations/Expectations';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Footer from './components/Footer/Footer';

function App() {
  
  const containerRef = useRef(null);
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    const scrollEl = containerRef.current;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08,
    });

    setScroll(scroll);

    // When Locomotive Scroll is ready, initialize AOS


    return () => {
      if (scroll) {
        scroll.destroy();
      }

    };
  }, []);

  return (
    <LocomotiveScrollProvider value={{ scroll }}>
      <>
        <TopPopup />
        <Navbar />
        <main data-scroll-container ref={containerRef}>
          <div data-scroll-section><Hero /></div>
          <div data-scroll-section><Work /></div>
          <div data-scroll-section><Services /></div>
          <div data-scroll-section><Expectations /></div>
          <div data-scroll-section><WhyChooseUs /></div>
          <div data-scroll-section><Footer /></div>
        </main>
      </>
    </LocomotiveScrollProvider>
  );
};

export default App;
