import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import TableAdmin from '../../components/TableAdim';

import { register, getAllUsers } from '../../services/api';

import * as S from './styled';

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
      <S.Title>Cadastrar novo usuário</S.Title>
      {
        isUserExist && (
          <S.Message
            data-testid="admin_manage__element-invalid-register"
          >
            Cadastro do usuário já existe
          </S.Message>
        )
      }
      <S.Form>
        <S.Label htmlFor="name">
          Nome:
          <S.Input
            id="name"
            name="name"
            value={ newUser.name }
            onChange={ ({ target }) => handleChange({ target }) }
            data-testid="admin_manage__input-name"
          />
        </S.Label>
        <S.Label htmlFor="email">
          Email:
          <S.Input
            id="email"
            name="email"
            value={ newUser.email }
            onChange={ ({ target }) => handleChange({ target }) }
            data-testid="admin_manage__input-email"
          />
        </S.Label>
        <S.Label htmlFor="password">
          Password:
          <S.Input
            id="password"
            name="password"
            value={ newUser.password }
            onChange={ ({ target }) => handleChange({ target }) }
            data-testid="admin_manage__input-password"
          />
        </S.Label>
        <S.Label htmlFor="role">
          Tipo
          <S.Select
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
          </S.Select>
        </S.Label>
        <S.Button
          disabled={ !isInputValid }
          type="button"
          data-testid="admin_manage__button-register"
          onClick={ () => handleClick() }
        >
          CADASTRAR
        </S.Button>
      </S.Form>

      <TableAdmin user={ userList } />
    </>
  );
}
