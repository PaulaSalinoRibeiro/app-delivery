import React, { useState } from 'react';
import logo from '../images/Logo.png';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [failedTryLogin] = useState(false);

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
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
    </section>
  );
}

export default Login;
