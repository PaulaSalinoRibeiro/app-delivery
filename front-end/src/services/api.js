import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

const keyToken = '@app-delivery:token';

export const login = async ({ email, password }) => {
  try {
    const { data } = await instance.post('/login', { email, password });
    return data;
  } catch (err) {
    return null;
  }
};

export const register = async ({ name, email, password }) => {
  try {
    const { data } = await instance.post('/user', { name, email, password });
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getProducts = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem(keyToken));
    const { data } = await instance.get(
      '/product',
      { headers: { authorization: token } },
    );
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};
