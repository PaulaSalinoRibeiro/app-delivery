import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

function NavBar() {
  const navigate = useNavigate();

  const { name, role } = JSON.parse(localStorage.getItem('@app-delivery:token'));

  function onClickLogoutHandler() {
    // localStorage.removeItem('carrinho');
    localStorage.removeItem('@app-delivery:token');
    navigate('/login');
  }

  const Products = (
    <S.ButtonProducts
      data-testid="customer_products__element-navbar-link-products"
      onClick={ () => { navigate('/customer/products'); } }
      type="button"
    >
      PRODUTOS
    </S.ButtonProducts>
  );

  const MyOrders = (
    <S.ButtonMyOrders
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ () => { navigate('/customer/orders'); } }
      type="button"
    >
      MEUS PEDIDOS
    </S.ButtonMyOrders>
  );

  const ManageOrders = (
    <S.ButtonManageOrders
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ () => { navigate('/seller/orders'); } }
      type="button"
    >
      PEDIDOS
    </S.ButtonManageOrders>
  );

  const ManageUsers = (
    <S.ButtonManageUsers
      data-testid="customer_products__element-navbar-link-orders"
      type="button"
    >
      GERENCIAR USUÁRIOS
    </S.ButtonManageUsers>
  );

  return (
    <S.Container className="nav-bar">
      { role === 'customer' && MyOrders }
      { role === 'customer' && Products }
      { role === 'seller' && ManageOrders }
      { role === 'admin' && ManageUsers }
      <S.User className="user-name">
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </span>
      </S.User>
      <S.LogoutButton
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => onClickLogoutHandler() }
      >
        Sair
      </S.LogoutButton>
    </S.Container>
  );
}

export default NavBar;
