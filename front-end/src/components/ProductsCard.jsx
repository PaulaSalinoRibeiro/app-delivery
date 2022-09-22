import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../context/MyContext';
import { getProducts } from '../services/api';
import * as S from './styled';

export default function ProductsCard() {
  const { products, setTotal, setProducts, total } = useContext(MyContext);
  const [data, setData] = useState({
    quantity: 0,
  });
  const [isBtnDisabled, setBtnDisabled] = useState(true);

  function modifyQuantity(type, price) {
    if (type === 'increase') {
      setData((state) => ({ ...state, quantity: (state.quantity + 1) }));
      setBtnDisabled(false);
      setTotal((state) => state + Number(price));
    }
    if (type === 'decrease') {
      if (data.quantity === 0) {
        setBtnDisabled(true);
        return;
      }
      setData((state) => ({ ...state, quantity: (state.quantity - 1) }));
      setTotal((state) => state - Number(price));
      if (total < 0) {
        setTotal(0);
      }
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
          <S.Image
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          >
            <img src={ product.urlImage } width={ 100 } alt={ product.name } />
          </S.Image>
          <button
            type="button"
            id={ `button-increase-${product.id}` }
            onClick={ () => modifyQuantity('increase', product.price) }
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
          <button
            type="button"
            id={ `button-decrease-${product.id}` }
            onClick={ () => modifyQuantity('decrease', product.price) }
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
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
            />
          </label>
        </S.Container>
      ))}
    </S.Container>
  );
}
