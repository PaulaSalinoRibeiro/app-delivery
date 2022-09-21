import React, { useEffect, useState } from 'react';

function Register() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [isBtnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    const { email, password, name } = data;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordMinLength = 6;
    const nameMinLength = 12;
    if (emailRegex.test(email) && password.length > passwordMinLength
    && name.length > nameMinLength) {
      setBtnDisabled(false);
    }
    if (!emailRegex.test(email) || password.length <= passwordMinLength
    || name.length <= nameMinLength) {
      setBtnDisabled(true);
    }
  }, [data]);

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
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
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
    </main>
  );
}
export default Register;
