import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
import { useState, useEffect} from 'react';
import {GlobalStyle} from './components/styled';
import Context from './components/Context';


function App() {
  const [headerBoxShadow, setHeaderBoxShadow] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleBoxShadow = () => {
      if (window.scrollY > 80){
        setHeaderBoxShadow(true)
        setShowHeader(true)
      }else{
        setHeaderBoxShadow(false)
      }
    };

    const handleScrollHeader =()=>{
      if (window.scrollY > 80){
        setShowHeader(true)
      } else if (window.scrollY < window.scrollY +10){
        setShowHeader(false)
      }
      console.log(window.scrollY, showHeader)
    };

    const handleScrollUp = () => {
      if (window.scrollY > 560){
        setShowScrollUp(true)
      }else{
        setShowScrollUp(false)
      }
    };
    window.addEventListener('scroll', handleBoxShadow);
    window.addEventListener('scroll', handleScrollUp);
    window.addEventListener('scroll', handleScrollHeader);
  
    return () => {
      window.removeEventListener('scroll', handleBoxShadow);
      window.removeEventListener('scroll', handleScrollUp);
      window.removeEventListener('scroll', handleScrollHeader);
    };
  }, []);

  return (
    <Context.Provider value={[darkMode, setDarkMode]}>
      <GlobalStyle darkMode={darkMode}/>
          <Navbar 
            headerBoxShadow={headerBoxShadow} 
            showHeader={showHeader} 
          />
          <Main/>
          <Footer/>
          <ScrollUp 
            showScrollUp={showScrollUp}
          />
    </Context.Provider>
  );
}

export default App;
