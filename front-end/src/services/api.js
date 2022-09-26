import axios from 'axios';

const keyToken = 'user';

const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem(keyToken)) || { token: '' };
  return token;
};

const instance = () => axios.create({
  baseURL: 'http://localhost:3001/',
  headers: { authorization: getToken() },
});

export const login = async ({ email, password }) => {
  try {
    const { data } = await instance().post('/login', { email, password });
    return data;
  } catch (err) {
    return null;
  }
};

export const register = async ({ name, email, password }) => {
  try {
    const { data } = await instance().post('/user', { name, email, password });
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const createSale = async (sale) => {
  try {
    const { data } = await instance().post(
      '/sale',
      { ...sale },
    );
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getProducts = async () => {
  try {
    const { data } = await instance().get(
      '/product',
    );
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getSellers = async () => {
  try {
    const { data } = await instance().get(
      '/user/seller',
    );
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};
