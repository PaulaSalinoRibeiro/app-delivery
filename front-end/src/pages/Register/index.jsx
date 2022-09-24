import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api';

import * as S from './styled';

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [failedServerConnection, setFailedServerConnection] = useState(false);
  const userkey = 'user';

  const navigate = useNavigate();

  useEffect(() => {
    const { email, password, name } = data;
    const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordMinLength = 6;
    const nameMinLength = 12;

    if (emailRegex.test(email) && password.length >= passwordMinLength
    && name.length >= nameMinLength) {
      setBtnDisabled(false);
    }

    if (!emailRegex.test(email) || password.length < passwordMinLength
    || name.length < nameMinLength) {
      setFailedTryLogin(true);
      setBtnDisabled(true);
    }

    if (email === '' || password === '' || name === '') setFailedTryLogin(false);
  }, [data]);

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
  }

  async function sendData() {
    const result = await register(data);
    if (!result) {
      setFailedServerConnection(true);
      return;
    }
    localStorage.setItem(userkey, JSON.stringify(result));
    navigate('/customer/products');
  }

  return (
    <S.Container>
      <S.Title>Cadastro</S.Title>
      <S.Forms>
        <S.Label htmlFor="input-name">
          Nome
          <S.Input
            type="text"
            id="input-name"
            name="name"
            value={ data.name }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="Seu nome"
            data-testid="common_register__input-name"
          />
        </S.Label>
        <S.Label htmlFor="input-email">
          Email
          <S.Input
            type="email"
            id="input-email"
            name="email"
            value={ data.email }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="seu-email@site.com.br"
            data-testid="common_register__input-email"
          />
        </S.Label>
        <S.Label htmlFor="input-password">
          Senha
          <S.Input
            type="password"
            id="input-password"
            name="password"
            value={ data.password }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="*********"
            data-testid="common_register__input-password"
          />
        </S.Label>
        <S.Button
          type="button"
          disabled={ isBtnDisabled }
          onClick={ () => sendData() }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </S.Button>
      </S.Forms>
      {
        (failedTryLogin)
          && (
            <S.Validation data-testid="common_login__element-invalid_register">
              O endereço de e-mail, senha ou nome não estão corretos.
              Por favor, tente novamente.
            </S.Validation>
          )
      }
      {
        (failedServerConnection)
          && (
            <S.FailConnect data-testid="common_register__element-invalid_register">
              Sistema fora do ar.
              Por favor, tente novamente.
            </S.FailConnect>
          )
      }
    </S.Container>
  );
}
export default Register;
