import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function OrdersCard(props) {
  const { order, dataTestId, path } = props;
  const {
    id,
    status,
    saleDate,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = order;
  const {
    OrderNumber,
    OrderDate,
    OrderStatus,
    OrderStatusLabel,
    OrderAddress,
    OrderPrice,
    url,
  } = dataTestId;

  return (
    <S.Container>
      <S.OrderLink
        to={ `/${path}/orders/${id}` }
        key={ order.id }
        data-testid={ `${url}-${id}` }
      >
        <S.Info>
          <S.OrderNumber>
            <S.Pedido data-testid={ `${OrderNumber}-${id}` }>
              Pedido
              {' '}
              {id}
            </S.Pedido>
          </S.OrderNumber>

          <S.Button
            type="button"
            status={ status }
            data-testid={ `${OrderStatus}-${id}` }
          >
            <span data-testid={ OrderStatusLabel }>
              {status}
            </span>
          </S.Button>
          <S.Details>
            <S.Date data-testid={ `${OrderDate}-${id}` }>
              {new Date(saleDate).toLocaleDateString('pt-br')}
            </S.Date>
            <S.Price data-testid={ `${OrderPrice}-${id}` }>
              R$
              {' '}
              {totalPrice.replace('.', ',')}
            </S.Price>
          </S.Details>
        </S.Info>
        <S.WrappingAddress>
          {
            OrderAddress && (
              <S.Address data-testid={ `${OrderAddress}-${id}` }>
                {`${deliveryAddress}, ${deliveryNumber}`}
              </S.Address>
            )
          }
        </S.WrappingAddress>
      </S.OrderLink>
    </S.Container>
  );
}

OrdersCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
  dataTestId: PropTypes.objectOf(PropTypes.string).isRequired,
  path: PropTypes.string.isRequired,
};
