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

export const register = async (body) => {
  try {
    const { data } = await instance().post('/user', body);
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

export const updateSale = async (id, sale) => {
  try {
    const { data } = await instance().put(`/sale/${id}`, sale);
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getOrdersById = async (id) => {
  try {
    const { data } = await instance().get(
      `/sale/${id}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllSalersByUser = async (body) => {
  try {
    const { data } = await instance().get('/sale', body);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await instance().get('/user');
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
