import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../../../components/NavBar';
import OrdersCard from '../../../components/OrdersCard';

import * as S from './styled';

const dataTestId = {
  OrderNumber: 'seller-order-details-label-order',
  OrderDate: 'seller-order-details-label-order-date',
  OrderStatus: 'seller-order-details-label-delivery-status',
  OrderAddress: 'seller_orders__element-card-address',
};

export default function SellerOrder() {
  const navigate = useNavigate();

  const orders = [{ id: 1,
    status: 'PENDENTE',
    date: '25/09/2022',
    price: '10.00',
    address: 'Rua X, Bairro Y, Z',
  }, { id: 2,
    status: 'PENDENTE',
    date: '26/09/2022',
    price: '20.00',
    address: 'Rua Y, Bairro Z, X',
  }, { id: 3,
    status: 'PENDENTE',
    date: '27/09/2022',
    price: '30.00',
    address: 'Rua Z, Bairro Y, X',
  }];
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        {orders?.map((order, index) => (
          <button
            type="button"
            key={ index }
            onClick={ () => navigate(`/seller/orders/${order.id}`) }
          >
            <OrdersCard
              order={ order }
              dataTestId={ dataTestId }
            />
          </button>
        ))}
      </S.Main>
    </S.Container>
  );
}
