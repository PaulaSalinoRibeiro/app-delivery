import React, { useState, useEffect } from 'react';
import MyContext from '../context/MyContext';
import { getProducts } from '../services/api';
import * as S from './styled';

export default function ProductsCard() {
  const { products, setTotal } = useContext(MyContext);
  const [data, setData] = useState({
    quantity: 0,
  });
  const [isBtnDisabled, setBtnDisabled] = useState(true);

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
  }

  function modifyQuantity(type, price) {
    if (type === 'increase') {
      setData((state) => ({ ...state, quantity: (state.quantity + 1) }));
      setBtnDisabled(false);
      setTotal((state) => (state + price));
    }
    if (type === 'decrease') {
      if (quantity === 0) {
        setBtnDisabled(true);
        return;
      }
      setData((state) => ({ ...state, quantity: (state.quantity - 1) }));
      setTotal((state) => (state - price));
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
  }, [products]);

  return (
    <S.Container>
      {products.map((product, index) => (
        <S.Container
          key={ index }
          data-testid={ `customer_products__element-card-price-${product.id}` }
        >
          <S.Title>{product.name}</S.Title>
          <S.Title>{product.price}</S.Title>
          <S.Image>
            <img src={ product.urlImage } width={ 100 } alt={ product.name } />
          </S.Image>
          <button
            type="button"
            onClick={ () => modifyQuantity('increase', product.price) }
          >
            +
          </button>
          <button
            type="button"
            onClick={ () => modifyQuantity('decrease', product.price) }
            disabled={ isBtnDisabled }
          >
            -
          </button>
          <label htmlFor="input-quantity">
            <input
              type="number"
              id="input-quantity"
              name="quantity"
              value={ data.quantity }
              onChange={ handleChange }
            />
          </label>
        </S.Container>
      ))}
    </S.Container>
  );
}
