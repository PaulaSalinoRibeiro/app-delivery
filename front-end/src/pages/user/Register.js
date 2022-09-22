import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import register from '../../services/register';

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [failedServerConnection, setFailedServerConnection] = useState(false);
  const keyLocalStorage = '@app-delivery:token';

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
  }, [data]);

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
  }

  async function sendData() {
    const result = await register(data);
    console.log(!result);
    if (!result) {
      setFailedServerConnection(true);
      return;
    }
    localStorage.setItem(keyLocalStorage, JSON.stringify(result));
    navigate('/customer/products');
    // return result;
  }

  return (
    <main>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            type="text"
            id="input-name"
            name="name"
            value={ data.name }
            onChange={ handleChange }
            placeholder="Seu nome"
            data-testid="common_register__input-name"
          />
        </label>
        <label htmlFor="input-email">
          Email
          <input
            type="email"
            id="input-email"
            name="email"
            value={ data.email }
            onChange={ handleChange }
            placeholder="seu-email@site.com.br"
            data-testid="common_register__input-email"
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
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="button"
          disabled={ isBtnDisabled }
          onClick={ sendData }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
      {
        (failedTryLogin)
          ? (
            <p data-testid="common_login__element-invalid_register">
              {
                `O endereço de e-mail, senha ou nome não estão corretos.
                  Por favor, tente novamente.`
              }
            </p>
          )
          : null
      }
      {
        (failedServerConnection)
          ? (
            <p data-testid="common_register__element-invalid_register">
              {
                `Sistema fora do ar.
                  Por favor, tente novamente.`
              }
            </p>
          )
          : null
      }
    </main>
  );
}
export default Register;
