import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../../../components/NavBar';
import Header from '../../../components/Header';
import TableProducts from '../../../components/TableProducts';

import { getOrdersById } from '../../../services/api';

import * as S from './styled';

const datatestids = {
  OrderNumber: 'seller-order-details-label-order-id',
  OrderDate: 'seller-order-details-label-order-date',
  OrderStatus: 'seller_order_details__element-order-details-label-delivery-status',
  OrderPreparing: 'seller_order_details__button-preparing-check',
  OrderDispatch: 'seller_order_details__button-dispatch-check',

  Item: 'seller_order_details__element-order-table-item-number',
  Describe: 'seller_order_details__element-order-table-name',
  Quantity: 'seller_order_details__element-order-table-quantity',
  PriceUnit: 'seller_order_details__element-order-table-unit-price',
  SubTotal: 'seller_order_details__element-order-table-sub-total',
};

export default function SellerOrder() {
  const { id: params } = useParams();

  const [total, setTotal] = useState('');
  const [header, setHeader] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getOrdersById(params).then(({
      products: arrProducts, seller, id: saleId, status, saleDate, totalPrice }) => {
      setProducts(arrProducts.map(({ id, name, price, SalesProducts }) => ({
        id,
        name,
        price,
        quantity: SalesProducts.quantity,
      })));
      setHeader({
        seller,
        status,
        saleDate: new Date(saleDate).toLocaleDateString('pt-br'),
        id: saleId });
      setTotal(totalPrice);
    });
  }, [params]);

  return (
    <S.Container>
      <NavBar />
      <S.Title>Detalhe do Pedido</S.Title>
      <S.Main>
        <Header dataTestId={ datatestids } header={ header } />
        <TableProducts datatestids={ datatestids } products={ products } />
        <S.Total>
          <p>
            Total: R$&nbsp;
            <span data-testid="seller_order_details__element-order-total-price">
              {
                parseFloat(total).toFixed(2).toString().replace('.', ',')
              }
            </span>
          </p>
        </S.Total>
      </S.Main>
    </S.Container>
  );
}
