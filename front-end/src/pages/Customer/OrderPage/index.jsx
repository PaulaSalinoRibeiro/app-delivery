import React, { useEffect, useState } from 'react';
import NavBar from '../../../components/NavBar';
import OrdersCard from '../../../components/OrdersCard';
import { getAllSalersByUser } from '../../../services/api';

const datatestid = {
  OrderNumber: 'customer_orders__element-order-id',
  OrderDate: 'customer_orders__element-order-date',
  OrderStatus: 'customer_orders__element-delivery-status',
  OrderPrice: 'customer_orders__element-card-price',
};

export default function OrderPage() {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    getAllSalersByUser({ userId: id })
      .then((result) => setOrdersList(result))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <NavBar />
      {
        ordersList
          .map((order) => (<OrdersCard
            key={ order.id }
            order={ order }
            dataTestId={ datatestid }
            path="customer"
          />))
      }
    </>
  );
}
