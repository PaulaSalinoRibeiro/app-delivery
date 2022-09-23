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
  Item: 'customer_order_details__element-order-table-item-number-',
  Describe: 'customer_order_details__element-order-table-name-',
  Quantity: 'customer_order_details__element-order-table-quantity-',
  PriceUnit: 'customer_order_details__element-order-table-unit-price-',
  SubTotal: 'customer_order_details__element-order-table-sub-total-',
};

export default function OrderPage() {
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <S.Title>Detalhe do Pedido</S.Title>
        <Header dataTestId={ dataTestId } />
        <TableProducts dataTestId={ dataTestId } />
      </S.Main>
      <S.Total>
        <p
          dataTestId="customer_order_details__element-order-total-price"
        >
          Total: R$ 28,90
        </p>
      </S.Total>
    </S.Container>
  );
}
