import React, { useEffect, useState } from 'react';
import logo from '../images/Logo.png';
import login from '../services/login';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [failedServerConnection, setFailedServerConnection] = useState(false);
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const keyLocalStorage = '@app-delivery:token';

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
  }

  useEffect(() => {
    const { email, password } = data;
    const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordMinLength = 6;
    if (emailRegex.test(email) && password.length >= passwordMinLength) {
      setBtnDisabled(false);
    }
    if (!emailRegex.test(email) || password.length < passwordMinLength) {
      setFailedTryLogin(true);
      setBtnDisabled(true);
    }
  }, [data]);

  async function sendData() {
    const result = await login(data);
    if (!result) {
      setFailedServerConnection(true);
      return;
    }
    localStorage.setItem(keyLocalStorage, JSON.stringify(result));
    return result;
  }

  return (
    <section>
      <img src={ logo } alt="Logo do App de Delivery" />
      <h1>App de Delivery</h1>
      <form>
        <label htmlFor="input-email">
          Login
          <input
            type="email"
            id="input-email"
            name="email"
            value={ data.email }
            onChange={ handleChange }
            placeholder="seu-email@site.com.br"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            type="password"
            id="input-password"
            name="password"
            value={ data.password }
            onChange={ handleChange }
            placeholder="*********"
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="button"
          disabled={ isBtnDisabled }
          onClick={ sendData }
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>

      {
        (failedTryLogin)
          ? (
            <p data-testid="common_login__element-invalid-email">
              {
                `O endereço de e-mail ou a senha não estão corretos.
                  Por favor, tente novamente.`
              }
            </p>
          )
          : null
      }
      {
        (failedServerConnection)
          ? (
            <p data-testid="common_login__element-invalid-email">
              Sistema fora do ar, porfavor tente mais tarde.
            </p>
          )
          : null
      }
    </section>
  );
}

export default Login;
