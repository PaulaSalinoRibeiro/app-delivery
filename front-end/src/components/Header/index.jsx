import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function Header(props) {
  const [status, setStatus] = useState('PENDENTE');
  const { dataTestId } = props;
  const {
    OrderNumber,
    OrderName,
    OrderDate,
    OrderStatus,
    OrderCheckDelivery,
    OrderPreparing,
    OrderDispatch,
  } = dataTestId;

  // const {
  //   id,
  //  number,
  //   name,
  //   date,
  //   status,
  // } = order;

  function changeOrderStatus(newStatus) {
    setStatus(newStatus);
  }

  return (
    <S.Container>
      <S.OrderNumber data-testid={ `${OrderNumber}-id` }>
        <p>PEDIDO 0001</p>
      </S.OrderNumber>

      {OrderName ? (
        <S.OrderName data-testid={ OrderName }>
          <p>P.Vend: Fulana Pereira</p>
        </S.OrderName>) : null}

      <S.Date data-testid={ OrderDate }>
        <p>26/09/2022</p>
      </S.Date>

      <S.Status data-testid={ OrderStatus }>
        <p>PENDENTE</p>
      </S.Status>

      {OrderPreparing && status === 'PENDENTE' ? (
        <S.CheckDelivery
          onClick={ () => changeOrderStatus('PREPARANDO') }
          data-testid={ OrderPreparing }
        >
          <p>PREPARAR PEDIDO</p>
        </S.CheckDelivery>) : null}

      {OrderDispatch && status === 'PREPARANDO' ? (
        <S.CheckDelivery
          onClick={ () => changeOrderStatus('EM TRÂNSITO') }
          data-testid={ OrderDispatch }
        >
          SAIU PARA ENTREGA
        </S.CheckDelivery>) : null}

      {OrderDispatch ? (
        <S.CheckDelivery
          onClick={ () => changeOrderStatus('ENTREGUE') }
          data-testid={ OrderCheckDelivery }
        >
          MARCAR COMO ENTREGUE
        </S.CheckDelivery>) : null}
    </S.Container>
  );
}

Header.propTypes = {
  dataTestId: PropTypes.objectOf(PropTypes.string).isRequired,
};
