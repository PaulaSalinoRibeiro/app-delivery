import React from 'react';
import PropTypes from 'prop-types';

// import * as S from './styled';

export default function OrdersCard(props) {
  const { order, dataTestId } = props;
  const {
    id,
    status,
    date,
    price,
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
    <div key={ order.id }>
      <p data-testid={ `${OrderNumber}-${id}` }>
        Pedido
        {' '}
        {id}
      </p>
      <p data-testid={ `${OrderStatus}-${id}` }>{status}</p>
      <p data-testid={ `${OrderDate}-${id}` }>{date}</p>
      <p data-testid={ `${OrderPrice}-${id}` }>
        R$
        {' '}
        {price}
      </p>
      <p data-testid={ `${OrderAddress}-${id}` }>{address}</p>
    </div>
  );
}

OrdersCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    date: PropTypes.string,
    price: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  dataTestId: PropTypes.objectOf(PropTypes.string).isRequired,
};
