import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import ProductsCard from '../../components/ProductsCard';
import MyContext from '../../context/MyContext';
import { getProducts } from '../../services/api';
import NavBar from '../../components/NavBar';

export default function Products() {
  const { total, products, setProducts } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (products?.length === 0) {
      const fetchProducts = async () => {
        const arrProducts = await getProducts();
        setProducts(arrProducts);
      };
      fetchProducts();
    }
  }, [products, setProducts]);

  return (
    <div>
      <NavBar />
      <button
        disabled={ total === 0 }
        type="button"
        onClick={ () => navigate('/customer/checkout') }
        data-testid="customer_products__button-cart"
      >
        <span data-testid="customer_products__checkout-bottom-value">
          Ver Carrinho: R$:
          { total.toFixed(2).toString().replace('.', ',') }

        </span>
      </button>
      <S.Container>
        {products?.map((product, index) => (
          <ProductsCard key={ index } product={ product } />
        ))}
      </S.Container>
    </div>
  );
}
