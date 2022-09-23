import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../context/MyContext';
import { getProducts } from '../services/api';
import * as S from './styled';

export default function ProductsCard() {
  const {
    products, setTotal, setProducts, cartItems, setCartItems } = useContext(MyContext);
  const [data, setData] = useState({
    quantity: 0,
  });
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const keyCart = '@app-delivery:cart';

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
  }

  function modifyQuantity(type, product) {
    const cart = JSON.parse(localStorage.getItem(keyCart)) || [];
    if (type === 'increase') {
      setData((state) => ({ ...state, quantity: (state.quantity + 1) }));
      if (isBtnDisabled === true) {
        setBtnDisabled(false);
      }
      setCartItems((state) => ({ ...state, product }));
      localStorage.setItem(keyCart, JSON.stringify([...cart, product]));
    }
    if (type === 'decrease') {
      setData((state) => ({ ...state, quantity: (state.quantity - 1) }));
      if (data.quantity <= 0) {
        setData((state) => ({ ...state, quantity: 0 }));
        setBtnDisabled(true);
        newCart = cart.filter((prod) => prod !== product);
        setCartItems(newCart);
        localStorage.setItem(keyCart, JSON.stringify(newCart));
        return;
      }
      const itemToRemove = cart.find((prod) => prod === product);
      cart.splice(cart.indexOf(itemToRemove), 1);
      setCartItems(cart);
      localStorage.setItem(keyCart, JSON.stringify(cart));
    }
  }

  useEffect(() => {
    if (products.length === 0) {
      const fetchProducts = async () => {
        const arrProducts = await getProducts();
        setProducts(arrProducts);
      };
      fetchProducts();
    }
  }, [products, setProducts]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem(keyCart)) || [];
    if (cart.length > 0) {
      const totalPrice = cart.reduce((acc, curr) => acc + Number(curr.price), 0);
      setTotal(totalPrice);
    }
  }, [cartItems, setCartItems]);

  return (
    <S.Container>
      {products.map((product) => (
        <S.Container key={ product.id }>
          <S.Title
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            {product.name}
          </S.Title>
          <S.Title
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {product.price}
          </S.Title>
          <S.Image>
            <img
              src={ product.urlImage }
              width={ 100 }
              alt={ product.name }
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            />
          </S.Image>
          <button
            type="button"
            id={ `button-increase-${product.id}` }
            onClick={ () => modifyQuantity('increase', product) }
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
          <button
            type="button"
            id={ `button-decrease-${product.id}` }
            onClick={ () => modifyQuantity('decrease', product) }
            disabled={ isBtnDisabled }
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            -
          </button>
          <label htmlFor="input-quantity">
            <input
              type="number"
              id={ `input-quantity-${product.id}` }
              name="quantity"
              value={ data.quantity }
              onChange={ ({ target }) => handleChange({ target }) }
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
            />
          </label>
        </S.Container>
      ))}
    </S.Container>
  );
}
