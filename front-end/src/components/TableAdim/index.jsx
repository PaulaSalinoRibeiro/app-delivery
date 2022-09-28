import React from 'react';
import PropTypes from 'prop-types';

export default function TableAdmin(props) {
  const { user } = props;
  return (
    <table>
      <tr>
        <th>{}</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Tipo</th>
        <th>Excluir</th>
      </tr>
      {
        user.map(({ id, name, email, role }, index) => (
          <tr key={ id }>
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
              <button
                type="button"
                onClick={ () => console.log(id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))
      }
    </table>
  );
}

TableAdmin.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
}.isRequired;
