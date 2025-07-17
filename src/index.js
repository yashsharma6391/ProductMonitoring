import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './modules/dashboard/Home';
import Product from './modules/products/Product';
import Customer from './modules/customer/Customer';
import Incomes from './modules/incomes/Incomes';
import Promote from './modules/promote/Promote'; // ✅ FIXED: correct file name
import Help from './modules/help/Help';
import Myerrorpage from './modules/error/Myerrorpage';
import Landingpage from './modules/dashboard/Landingpage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />} />

        <Route path="/Dashboard" element={<Landingpage />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="customer" element={<Customer />} />
          <Route path="income" element={<Incomes />} />
          <Route path="promote" element={<Promote />} /> {/* ✅ FIXED */}
          <Route path="help" element={<Help />} />
          <Route path="*" element={<Myerrorpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
