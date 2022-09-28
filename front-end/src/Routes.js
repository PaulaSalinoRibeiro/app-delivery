import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import DetailsPage from './pages/Customer/DetailsPage';
import OrderPage from './pages/Customer/OrderPage';
import Checkout from './pages/Checkout';
import SellerOrders from './pages/Seller/Orders';
import SellerOrder from './pages/Seller/OrderDetails';

function Routes() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/customer/products" element={ <Products /> } />
          <Route exact path="/customer/checkout" element={ <Checkout /> } />
          <Route exact path="/customer/orders/:id" element={ <DetailsPage /> } />
          <Route exact path="/customer/orders" element={ <OrderPage /> } />
          <Route exact path="/seller/orders" element={ <SellerOrders /> } />
          <Route exact path="/seller/orders/:id" element={ <SellerOrder /> } />
        </Switch>
      </main>
    </div>
  );
}

export default Routes;
