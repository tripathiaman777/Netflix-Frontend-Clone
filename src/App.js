import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import NetFlixShow from './pages/NetFlixShow';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
  <ScrollToTop/>
    
    <Routes>
    
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/netflix-show" element={<NetFlixShow/>}/>
    
    </Routes>
    
  
    <Footer/>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
