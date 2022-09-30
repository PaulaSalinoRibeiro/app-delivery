import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSale, getSellers } from '../../services/api';
import { getCart } from '../../services/cartService';

import * as S from './styled';

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
    console.log(sale);
    navigate(`/customer/orders/${sale.id}`);
  };

  return (
    <S.Container>
      <S.Title>Detalhes e Endereço para entrega</S.Title>
      <S.Form>
        <S.Label htmlFor="input-saller">
          Vendedor:
          <S.Select
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
          </S.Select>
        </S.Label>

        <S.Label htmlFor="input-addr">
          Endereço:
          <S.InputAddres
            onChange={ ({ target: { value } }) => setAddress(value) }
            data-testid="customer_checkout__input-address"
          />
        </S.Label>

        <S.Label htmlFor="input-number">
          Número:
          <S.InputNumber
            type="number"
            onChange={ ({ target: { value } }) => setNumber(value) }
            data-testid="customer_checkout__input-address-number"
          />
        </S.Label>
      </S.Form>
      <S.Button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ finish }
      >
        FINALIZAR
      </S.Button>
    </S.Container>
  );
}
