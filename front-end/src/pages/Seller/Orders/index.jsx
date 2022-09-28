import React, { useEffect, useState } from 'react';

import NavBar from '../../../components/NavBar';
import OrdersCard from '../../../components/OrdersCard';

import { getAllSalersByUser } from '../../../services/api';

import * as S from './styled';

const datatestid = {
  OrderNumber: 'seller-order-details-label-order',
  OrderDate: 'seller-order-details-label-order-date',
  OrderStatus: 'seller_orders__element-delivery-status',
  OrderAddress: 'seller_orders__element-card-address',
  url: 'seller_orders__element-order-id',
};

export default function SellerOrder() {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    getAllSalersByUser({ sellerId: id })
      .then((result) => setOrdersList(result))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <S.Container>
      <NavBar />
      <S.Main>
        {
          ordersList
            .map((order) => (<OrdersCard
              key={ order.id }
              order={ order }
              dataTestId={ datatestid }
              path="seller"
            />))
        }
      </S.Main>
    </S.Container>
  );
}
