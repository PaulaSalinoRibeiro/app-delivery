import React from 'react';

import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import TableProducts from '../../components/TableProducts';

import * as S from './styled';

const dataTestId = {
  OrderNumber: 'customer_order_details__element-order-details-label-order-id',
  OrderName: 'customer_order_details__element-order-details-label-seller-name',
  OrderDate: 'customer_order_details__element-order-details-label-order-date',
  OrderStatus: 'customer_order_details__element-order-details-label-delivery-status',
  OrderCheckDelivery: 'customer_order_details__button-delivery-check',
};

export default function OrderPage() {
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <S.Title>Detalhe do Pedido</S.Title>
        <Header dataTestId={ dataTestId } />
        <TableProducts />
      </S.Main>
    </S.Container>
  );
}
