import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: ${({ theme }) => theme.color.background};
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 6px 12px;
  width: 28%;
`;

export const OrderLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${({ theme }) => theme.color.textDark};
`;

export const OrderNumber = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.textLight};
  border-radius: 8px;
  display: flex;
  padding: 0 18px;
  width: 18%;
`;

export const Pedido = styled.p`
  font-weight: bold;
`;

export const Button = styled.button`
  background: ${({ theme }, status) => {
    switch (status) {
    case 'Pendente':
      return theme.color.pendente;
    case 'Preparando':
      return theme.color.preparando;
    default:
      return theme.color.entregue;
    }
  }};
  border: none;
  border-radius: 8px;
  padding: 0 42px;
  font-weight: bold;
  width: 42%;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.div``;

export const Date = styled.p`
  background: white;
  border-radius: 8px;
  font-weight: bold;
  padding: 8px 16px;
`;

export const Price = styled.p`
  background: white;
  border-radius: 8px;
  font-weight: bold;
  padding: 8px 16px;
`;

export const WrappingAddress = styled.div``;

export const Address = styled.p`
  margin-left: 26%;
`;
