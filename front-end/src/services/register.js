import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

const register = async ({ name, email, password }) => {
  try {
    const { data } = await instance.post('/user', { name, email, password });
    return data;
  } catch (err) {
    return null;
  }
};

export default register;
