import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import { getCart } from '../services/cartService';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(getCart());

  const context = useMemo(() => {
    const updateCart = () => {
      setCartItems(getCart());
    };

    return ({
      products,
      setProducts,
      total,
      setTotal,
      cartItems,
      setCartItems,
      updateCart,
    });
  }, [cartItems, products, total]);

  useEffect(() => {
    setTotal(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [cartItems]);

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
