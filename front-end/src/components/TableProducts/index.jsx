import React from 'react';

import * as S from './styled';

export default function TableProducts() {
  return (
    <S.Table>
      <S.TableRow>
        <th>
          Item
        </th>

        <th>
          Descrição
        </th>

        <th>
          Quantidade
        </th>

        <th>
          Valor Unitário
        </th>

        <th>
          Subtotal
        </th>
      </S.TableRow>

      <S.TableRow>

        <td>1</td>

        <td>Cerveja Stella 250ml</td>

        <td>3</td>

        <td>R$ 3,50</td>

        <td>R$ 10,50</td>

      </S.TableRow>

    </S.Table>
  );
}
