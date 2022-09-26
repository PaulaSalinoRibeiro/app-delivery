import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import OrderPage from './pages/OrderPage';
import SellerOrder from './pages/SellerOrderDetails';

function Routes() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/customer/products" element={ <Products /> } />
          <Route exact path="/customer/orders/:id" element={ <OrderPage /> } />
          <Route exact path="/seller/orders/:id" element={ <SellerOrder /> } />
        </Switch>
      </main>
    </div>
  );
}

export default Routes;
