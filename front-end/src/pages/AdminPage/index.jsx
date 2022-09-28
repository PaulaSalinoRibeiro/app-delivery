import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import TableAdmin from '../../components/TableAdim';

import { register, getAllUsers } from '../../services/api';

export default function AdminPage() {
  const [newUser, setNewuser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [isInputValid, setIsInputValid] = useState(false);
  const [isUserExist, setIsUserExist] = useState(false);
  const [userList, setUserList] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setNewuser((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    getAllUsers()
      .then((result) => {
        const users = result.filter((item) => item.role !== 'administrator');
        setUserList(users);
      })
      .catch((error) => console.log(error.message));
  });

  useEffect(() => {
    const { email, password, name } = newUser;
    const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordMinLength = 6;
    const nameMinLength = 12;

    if (emailRegex.test(email) && password.length >= passwordMinLength
    && name.length >= nameMinLength) {
      setIsInputValid(true);
    }

    if (!emailRegex.test(email) || password.length < passwordMinLength
    || name.length < nameMinLength) {
      setIsInputValid(false);
    }
  }, [newUser]);

  const handleClick = () => {
    setNewuser({
      name: '',
      email: '',
      password: '',
      role: 'customer',
    });
    register(newUser)
      .then((result) => (!result ? setIsUserExist(true) : setIsUserExist(false)))
      .catch((error) => {
        console.log(error.message);
        setIsUserExist(true);
      });
  };

  return (
    <>
      <NavBar />
      <h1>Cadastrar novo usuário</h1>
      {
        isUserExist && (
          <p
            data-testid="admin_manage__element-invalid-register"
          >
            Cadastro do usuário já existe
          </p>
        )
      }
      <form>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            value={ newUser.name }
            onChange={ ({ target }) => handleChange({ target }) }
            data-testid="admin_manage__input-name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            value={ newUser.email }
            onChange={ ({ target }) => handleChange({ target }) }
            data-testid="admin_manage__input-email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            value={ newUser.password }
            onChange={ ({ target }) => handleChange({ target }) }
            data-testid="admin_manage__input-password"
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            onChange={ ({ target }) => handleChange({ target }) }
            name="role"
            data-testid="admin_manage__select-role"
          >
            <option value="customer">
              Cliente
            </option>
            <option value="seller">
              Vendedor
            </option>
          </select>
        </label>
        <button
          disabled={ !isInputValid }
          type="button"
          data-testid="admin_manage__button-register"
          onClick={ () => handleClick() }
        >
          CADASTRAR
        </button>
      </form>
      <TableAdmin user={ userList } />
    </>
  );
}
