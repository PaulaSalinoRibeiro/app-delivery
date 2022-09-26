import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function TableProducts(props) {
  const { datatestids: {
    Item,
    Describe,
    Quantity,
    PriceUnit,
    SubTotal,
  },
  removible,
  removeClick,
  products } = props;

  return (
    <S.Table>
      <thead>
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
      </thead>
      <tbody>
        {products?.map((item, index) => (
          <S.TableRow key={ index }>
            <td
              data-testid={ `${Item}${index}` }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `${Describe}${index}` }
            >
              {item.name}
            </td>
            <td
              data-testid={ `${Quantity}${index}` }
            >
              {item.quantity}
            </td>
            <td
              data-testid={ `${PriceUnit}${index}` }
            >
              {parseFloat(item.price).toFixed(2).toString().replace('.', ',')}
            </td>
            <td
              data-testid={ `${SubTotal}${index}` }
            >
              {parseFloat(item.quantity * item.price)
                .toFixed(2).toString().replace('.', ',')}
            </td>
            {
              removible
            && (
              <td>
                <button
                  type="button"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick={ () => removeClick(item.id) }
                >
                  Remover item
                </button>
              </td>
            )
            }
          </S.TableRow>
        ))}
      </tbody>
    </S.Table>
  );
}
TableProducts.defaultProps = {
  removible: false,
};
TableProducts.propTypes = {
  datatestids: PropTypes.objectOf(PropTypes.string).isRequired,
  removible: PropTypes.bool,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    urlImage: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
  removeClick: PropTypes.func.isRequired,
};
