import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../../../components/NavBar';
import Header from '../../../components/Header';
import TableProducts from '../../../components/TableProducts';

import { getOrdersById } from '../../../services/api';

import * as S from './styled';

const datatestid = {
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

export default function DetailsPage() {
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
      <S.Main>
        <S.Title>Detalhe do Pedido</S.Title>
        <Header dataTestId={ datatestid } header={ header } />
        <TableProducts datatestids={ datatestid } products={ products } />
      </S.Main>
      <S.Total>
        <p
          data-testid="customer_order_details__element-order-total-price"
        >
          Total: R$
          { total }
        </p>
      </S.Total>
    </S.Container>
  );
}
