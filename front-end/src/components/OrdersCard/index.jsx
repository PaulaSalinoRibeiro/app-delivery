import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import * as S from './styled';

export default function OrdersCard(props) {
  const { order, dataTestId, path } = props;
  const {
    id,
    status,
    saleDate,
    totalPrice,
    address,
  } = order;
  const {
    OrderNumber,
    OrderDate,
    OrderStatus,
    OrderAddress,
    OrderPrice,
  } = dataTestId;

  return (
    <Link to={ `/${path}/orders/${id}` } key={ order.id }>
      <p data-testid={ `${OrderNumber}-${id}` }>
        Pedido
        {' '}
        {id}
      </p>
      <p data-testid={ `${OrderStatus}-${id}` }>{status}</p>
      <p data-testid={ `${OrderDate}-${id}` }>
        {new Date(saleDate).toLocaleDateString('pt-br')}
      </p>
      <p data-testid={ `${OrderPrice}-${id}` }>
        R$
        {' '}
        {totalPrice.replace('.', ',')}
      </p>
      {
        OrderAddress && (
          <p data-testid={ `${OrderAddress}-${id}` }>{address}</p>
        )
      }
    </Link>
  );
}

OrdersCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  dataTestId: PropTypes.objectOf(PropTypes.string).isRequired,
  path: PropTypes.string.isRequired,
};
