import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.png';
import { login } from '../../services/api';

import * as S from './styled';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [failedServerConnection, setFailedServerConnection] = useState(false);
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const userKey = 'user';

  const navigate = useNavigate();

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) navigate('/customer/products');
  }, []);

  useEffect(() => {
    const { email, password } = data;
    const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordMinLength = 6;

    if (emailRegex.test(email) && password.length >= passwordMinLength) {
      setBtnDisabled(false);
    }

    if (!emailRegex.test(email) || password.length < passwordMinLength) {
      setBtnDisabled(true);
    }
  }, [data]);

  async function sendData() {
    const result = await login(data);
    if (!result) {
      setFailedServerConnection(true);
      return;
    }
    localStorage.setItem(userKey, JSON.stringify(result));

    if (result.role === 'customer') navigate('/customer/products');

    if (result.role === 'administrator') navigate('/admin/manage');
  }

  return (
    <S.Container>
      <S.Image>
        <img src={ logo } width={ 100 } alt="Logo do App de Delivery" />
      </S.Image>
      <S.Title>App de Delivery</S.Title>
      <S.Forms>
        <S.Label htmlFor="input-email">
          Login
          <S.Input
            type="email"
            id="input-email"
            name="email"
            value={ data.email }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="seu-email@site.com.br"
            data-testid="common_login__input-email"
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
            data-testid="common_login__input-password"
          />
        </S.Label>
        <S.ButtonLogin
          type="button"
          disabled={ isBtnDisabled }
          onClick={ () => sendData() }
          data-testid="common_login__button-login"
        >
          LOGIN
        </S.ButtonLogin>
        <S.ButtonRegister
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </S.ButtonRegister>
      </S.Forms>

      {
        (failedServerConnection)
          && (
            <S.FailLogin data-testid="common_login__element-invalid-email">
              O endereço de e-mail ou a senha não estão corretos.
              Por favor, tente novamente.
            </S.FailLogin>
          )
      }
    </S.Container>
  );
}

export default Login;
