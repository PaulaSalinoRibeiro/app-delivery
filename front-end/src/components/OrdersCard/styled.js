import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: ${({ theme }) => theme.color.textLight};
  margin-bottom: 24px;
  padding: 24px 48px;
  width: 28%;
`;

export const OrderLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${({ theme }) => theme.color.textDark};
`;

export const Pedido = styled.p`
  font-weight: bold;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.quaternario};
  border: none;
  border-radius: 8px;
  padding: 0 42px;
  font-weight: bold;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.div``;

export const Date = styled.p`
  background: white;
  font-weight: bold;
  padding: 8px 16px;
`;

export const Price = styled.p`
  background: white;
  font-weight: bold;
  padding: 8px 16px;
`;

export const WrappingAddress = styled.div``;

export const Address = styled.p`
  margin-left: 26%;
`;
