import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function Header(props) {
  const { dataTestId, header } = props;
  const [status, setStatus] = useState(header?.status);
  const {
    OrderNumber,
    OrderName,
    OrderDate,
    OrderStatus,
    OrderCheckDelivery,
    OrderPreparing,
    OrderDispatch,
  } = dataTestId;

  function changeOrderStatus(newStatus) {
    setStatus(newStatus);
  }

  useEffect( () => {
    setStatus(header.status)
  }, [header])

  return (
    <S.Container>
      <S.OrderNumber data-testid={ OrderNumber }>
        <p>PEDIDO { header?.id }</p>
      </S.OrderNumber>

      {OrderName ? (
        <S.OrderName data-testid={ OrderName }>
          <p>P.Vend: { header?.seller?.name } </p>
        </S.OrderName>) : null}

      <S.Date data-testid={ OrderDate }>
        <p>{ header?.saleDate }</p>
      </S.Date>

      <S.Status data-testid={ OrderStatus }>
        <p>{ status }</p>
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

      {OrderCheckDelivery ? (
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
