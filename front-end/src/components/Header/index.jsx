import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import { updateSale } from '../../services/api';

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

  async function changeOrderStatus(newStatus) {
    const result = await updateSale(header.id, { status: newStatus });
    if (result) setStatus(result.status);
  }

  useEffect(() => {
    setStatus(header.status);
    console.log(header.status);
  }, [header]);

  return (
    <S.Container>
      <S.OrderNumber data-testid={ OrderNumber }>
        <p>
          PEDIDO
          {' '}
          { header?.id }
        </p>
      </S.OrderNumber>

      {OrderName ? (
        <S.OrderName data-testid={ OrderName }>
          <p>
            P.Vend:
            {' '}
            { header?.seller?.name }
            {' '}
          </p>
        </S.OrderName>) : null}

      <S.Date data-testid={ OrderDate }>
        <p>{ header?.saleDate }</p>
      </S.Date>

      <S.Status data-testid={ OrderStatus }>
        { status }
      </S.Status>

      {OrderPreparing && (
        <S.CheckDelivery
          disabled={ status !== 'Pendente' }
          onClick={ () => changeOrderStatus('Preparando') }
          data-testid={ OrderPreparing }
        >
          <p>PREPARAR PEDIDO</p>
        </S.CheckDelivery>) }

      {OrderDispatch && (
        <S.CheckDelivery
          disabled={ status !== 'Preparando' }
          onClick={ () => changeOrderStatus('Em Trânsito') }
          data-testid={ OrderDispatch }
        >
          SAIU PARA ENTREGA
        </S.CheckDelivery>) }

      {OrderCheckDelivery && (
        <S.CheckDelivery
          disabled={ status !== 'Em Trânsito' }
          onClick={ () => { changeOrderStatus('Entregue'); console.log('click'); } }
          data-testid={ OrderCheckDelivery }
        >
          MARCAR COMO ENTREGUE
        </S.CheckDelivery>) }
    </S.Container>
  );
}

Header.propTypes = {
  dataTestId: PropTypes.objectOf(PropTypes.string).isRequired,
  header: PropTypes.shape(
    {
      id: PropTypes.number,
      saleNumber: PropTypes.number,
      saleDate: PropTypes.string,
      status: PropTypes.string,
      seller: PropTypes.shape({
        name: PropTypes.string,
      }),
    },
  ).isRequired,
};
