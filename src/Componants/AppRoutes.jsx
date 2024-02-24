import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './All';
import Home from './Home';
import Electropage from './Electropage';
import Jewepage from './Jewepage';
import Menpage from './Menpage';
import Womenpage from './Womepage';
import Product from './Product';
import Notfound from './Notfound';



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes> 

        <Route path="/" element={<Home/>}/>
        <Route path="/all-products" element={<All/>}/>
        <Route path="/electronics" element={<Electropage/>}/>
        <Route path="/jewelery" element={<Jewepage/>}/>
        <Route path="/men's clothes" element={<Menpage/>}/>
        <Route path="/women's clothes" element={<Womenpage/>}/>
        <Route path="/product/:pID" element={<Product/>}/>
        <Route path="*" element={<Notfound />}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
