import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const { name, role } = JSON.parse(localStorage.getItem('@app-delivery:token'));

  function onClickLogoutHandler() {
    // localStorage.removeItem('carrinho');
    localStorage.removeItem('@app-delivery:token');
    navigate('/login');
  }

  const Products = (
    <button
      data-testid="customer_products__element-navbar-link-products"
      onClick={ () => { navigate('/customer/products'); } }
      type="button"
    >
      PRODUTOS
    </button>
  );

  const MyOrders = (
    <button
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ () => { navigate('/customer/orders'); } }
      type="button"
    >
      MEUS PEDIDOS
    </button>
  );

  const ManageOrders = (
    <button
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ () => { navigate('/seller/orders'); } }
      type="button"
    >
      PEDIDOS
    </button>
  );

  const ManageUsers = (
    <button
      data-testid="customer_products__element-navbar-link-orders"
      type="button"
    >
      GERENCIAR USUÁRIOS
    </button>
  );

  return (
    <div className="nav-bar">
      { role === 'customer' && MyOrders }
      { role === 'customer' && Products }
      { role === 'seller' && ManageOrders }
      { role === 'admin' && ManageUsers }
      <div className="user-name">
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </span>
      </div>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ onClickLogoutHandler }
      >
        Sair
      </button>
    </div>
  );
}

export default NavBar;
