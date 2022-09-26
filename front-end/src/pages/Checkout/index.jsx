import React, { useContext, useState } from 'react';
import CheckoutDetails from '../../components/CheckoutDetails';

import NavBar from '../../components/NavBar';
import TableProducts from '../../components/TableProducts';
import MyContext from '../../context/MyContext';
import { getCart, removeCartItem } from '../../services/cartService';

import * as S from './styled';

const datatestids = {
  OrderNumber: 'customer_order_details__element-order-details-label-order-id',
  OrderName: 'customer_order_details__element-order-details-label-seller-name',
  OrderDate: 'customer_order_details__element-order-details-label-order-date',
  OrderStatus: 'customer_order_details__element-order-details-label-delivery-status',
  OrderCheckDelivery: 'customer_order_details__button-delivery-check',
  Item: 'customer_checkout__element-order-table-item-number-',
  Describe: 'customer_checkout__element-order-table-name-',
  Quantity: 'customer_checkout__element-order-table-quantity-',
  PriceUnit: 'customer_checkout__element-order-table-unit-price-',
  SubTotal: 'customer_checkout__element-order-table-sub-total-',
};

export default function Checkout() {
  const { total, updateCart } = useContext(MyContext);
  const [cart, setCart] = useState(getCart());

  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <S.Title>Finalizar Pedido</S.Title>
        <TableProducts
          datatestids={ datatestids }
          removible
          products={ cart }
          removeClick={ (id) => {
            removeCartItem(id);
            setCart(getCart());
            updateCart();
          } }
        />
        <CheckoutDetails />
      </S.Main>
      <S.Total>
        <p>
          Total: R$
          {' '}
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            {total.toFixed(2).toString().replace('.', ',')}
          </span>
        </p>
      </S.Total>
    </S.Container>
  );
}
