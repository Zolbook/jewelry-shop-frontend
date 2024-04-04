import React, { useState } from 'react';
import './index.css';
import './index.css';
import Order from './Order';
import About from './About';
import Main from './Main';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Notfound from './Notfound';
import ProtectedRoute from './ProtectedRoute';
import { useContext } from 'react';
import { DataContext } from './Context';
import Basket from './Basket';
import Register from './Register';
export default function App() {


  const notes = ['Бидний тухай', 'Холбоо барих', 'Асуулт', 'Заавар']

  const { products } = useContext(DataContext);

  const [user, setUser] = useState('');


  return (
    <div className="flex flex-col min-h-screen"> 
      <Header user={user} onLogin={setUser} />
  
      <main className="flex-grow"> 
        <Routes>
          <Route path='/' element={<Main products={products} />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/order' element={<Order />} />
          <Route path='/login' element={<Login onLogin={setUser} />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/product' element={<ProtectedRoute user={user}><Main products={products} /></ProtectedRoute>} />
        </Routes>
      </main>
  
      <Footer notes={notes} />
    </div>
  );
}
