import React from 'react';
import './sass/index.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Cart from './Pages/Cart'
import Home from './Pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
