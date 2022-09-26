import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSale, getSellers } from '../../services/api';
import { getCart } from '../../services/cartService';

export default function CheckoutDetails() {
  const navigate = useNavigate();

  const [sellers, setSellers] = useState();
  const [sellerId, setSellerId] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();

  useEffect(() => {
    getSellers().then((res) => {
      setSellers(res);
      setSellerId(res[0].id);
    });
  }, []);

  const finish = async () => {
    const sale = await createSale({
      sellerId,
      products: getCart(),
      deliveryAddress: address,
      deliveryNumber: number,
      saleDate: new Date(),
    });
    navigate(`/customer/orders/${sale.id}`);
  };

  return (
    <div>
      <label htmlFor="input-saller">
        Vendedor: &nbsp;
        <select
          onChange={ ({ target: { value } }) => setSellerId(value) }
          name="input-saller"
          data-testid="customer_checkout__select-seller"
        >
          <option>Selecionar</option>
          {sellers?.map((sellerItem) => (
            <option
              key={ sellerItem.id }
              value={ sellerItem.id }
            >
              {sellerItem.name}
            </option>
          ))}
        </select>
      </label>
      &nbsp;
      <label htmlFor="input-addr">
        Endereço: &nbsp;
        <input
          onChange={ ({ target: { value } }) => setAddress(value) }
          data-testid="customer_checkout__input-address"
        />
      </label>
      &nbsp;
      <label htmlFor="input-number">
        Número: &nbsp;
        <input
          type="number"
          onChange={ ({ target: { value } }) => setNumber(value) }
          data-testid="customer_checkout__input-address-number"
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ finish }
      >
        FINALIZAR
      </button>
    </div>
  );
}
