import React from 'react';

import * as S from './styled';

export default function Header(dataTestId) {
  const {
    OrderNumber,
    OrderName,
    OrderDate,
    OrderStatus,
    OrderCheckDelivery,
  } = dataTestId;

  return (
    <S.Container>
      <S.OrderNumber
        data-testid={ OrderNumber }
      >
        <p>PEDIDO 003;</p>
      </S.OrderNumber>

      <S.OrderName
        data-testid={ OrderName }
      >
        <p>P.Vend: Fulana Pereira</p>
      </S.OrderName>

      <S.Date
        data-testid={ OrderDate }
      >
        <p> 07/04/2022</p>
      </S.Date>

      <S.Status
        data-testid={ `${OrderStatus}-index` }
      >
        <p>ENTREGUE</p>
      </S.Status>

      <S.CheckDelivery
        data-testid={ OrderCheckDelivery }
      >
        MARCAR COMO ENTREGUE
      </S.CheckDelivery>

    </S.Container>
  );
}
