import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function TableAdmin(props) {
  const { user } = props;
  return (
    <>
      <S.Title>Lista de usuários</S.Title>

      <S.Table>
        <S.TableRow>
          <th>{}</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </S.TableRow>
        {
          user.map(({ id, name, email, role }, index) => (
            <S.TableRow key={ id }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                {name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                {email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                {role === 'seller' ? 'P. Vendedora' : 'Cliente'}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-remove-${index}` }
              >
                <S.Button
                  type="button"
                  onClick={ () => console.log(id) }
                >
                  Excluir
                </S.Button>
              </td>
            </S.TableRow>
          ))
        }
      </S.Table>
    </>
  );
}

TableAdmin.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
}.isRequired;
