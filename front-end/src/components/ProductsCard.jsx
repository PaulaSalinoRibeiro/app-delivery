import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import * as S from './styled';

export default function ProductsCard(props) {
  const { product } = props;
  const {
    setTotal, cartItems, setCartItems } = useContext(MyContext);
  const [data, setData] = useState({
    quantity: 0,
  });
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const keyCart = '@app-delivery:cart';

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
    if (value <= 0) {
      setData((state) => ({ ...state, [name]: 0 }));
      setBtnDisabled(true);
      return;
    }

    const cart = JSON.parse(localStorage.getItem(keyCart)) || [];
    setData((state) => ({ ...state, quantity: Number(value) }));
    setBtnDisabled(false);
    const newProducts = [];
    for (let index = 0; index < Number(value); index += 1) {
      newProducts.push(product);
    }
    setCartItems((state) => ({ ...state, ...newProducts }));
    localStorage.setItem(keyCart, JSON.stringify([...cart, ...newProducts]));
  }

  function modifyQuantity(type) {
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
    const cart = JSON.parse(localStorage.getItem(keyCart)) || [];
    if (cart.length > 0) {
      const totalPrice = cart.reduce((acc, curr) => acc + Number(curr.price), 0);
      setTotal(totalPrice);
    }
  }, [cartItems, setCartItems]);

  return (
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
        onClick={ () => modifyQuantity('increase') }
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
      >
        +
      </button>
      <button
        type="button"
        id={ `button-decrease-${product.id}` }
        onClick={ () => modifyQuantity('decrease') }
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
  );
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    urlImage: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};
