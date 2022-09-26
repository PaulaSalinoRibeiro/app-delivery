import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function TableProducts(props) {
  const { dataTestId } = props;
  const {
    Item,
    Describe,
    Quantity,
    PriceUnit,
    SubTotal,
  } = dataTestId;

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
        <td
          dataTestId={ `${Item}-index` }
        >
          1
        </td>
        <td
          dataTestId={ `${Describe}-index` }
        >
          Cerveja Stella 250ml
        </td>
        <td
          dataTestId={ `${Quantity}-index` }
        >
          3
        </td>
        <td
          dataTestId={ `${PriceUnit}-index` }
        >
          R$ 3,50
        </td>
        <td
          dataTestId={ `${SubTotal}-index` }
        >
          R$ 10,50
        </td>
      </S.TableRow>
    </S.Table>
  );
}

TableProducts.propTypes = {
  dataTestId: PropTypes.objectOf(PropTypes.string).isRequired,
};
