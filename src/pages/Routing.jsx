import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Account from './Account';
import Cart from './Cart';
import Nav from './Nav';
import Error from './Error';
import AdminDashboard from './AdminDashboard';
const Routing = () => {
  return (
    <Router>
      <Nav/>
      <Routes >
        <Route path="/" exact element={<Home/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
      </Routes>
    </Router>
  )
}

export default Routing;