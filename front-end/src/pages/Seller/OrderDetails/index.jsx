import React from 'react';

import NavBar from '../../../components/NavBar';
import Header from '../../../components/Header';
import TableProducts from '../../../components/TableProducts';

import * as S from './styled';

const dataTestId = {
  OrderNumber: 'seller-order-details-label-order',
  OrderDate: 'seller-order-details-label-order-date',
  OrderStatus: 'seller-order-details-label-delivery-status',
  OrderPreparing: 'seller_order_details__button-preparing-check',
  OrderDispatch: 'seller_order_details__button-dispatch-check',

  Item: 'seller_order_details__element-order-table-item-number',
  Describe: 'seller_order_details__element-order-table-name',
  Quantity: 'seller_order_details__element-order-table-quantity',
  PriceUnit: 'seller_order_details__element-order-table-unit-price',
  SubTotal: 'seller_order_details__element-order-table-sub-total',
};

export default function SellerOrder() {
  return (
    <S.Container>
      <NavBar />
      <S.Title>Detalhe do Pedido</S.Title>
      <S.Main>
        <Header dataTestId={ dataTestId } />
        <TableProducts dataTestId={ dataTestId } />
        <S.Total>
          <p dataTestId="seller_order_details__element-order-total-price">
            Total: R$
          </p>
        </S.Total>
      </S.Main>
    </S.Container>
  );
}
