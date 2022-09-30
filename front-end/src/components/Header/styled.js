import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  background: ${({ theme }) => theme.color.background};
  padding: 4px 0;
  margin-bottom: 32px;
  width: 100%;
`;

export const OrderNumber = styled.div`
  width: 10%;
  p {
    color: ${({ theme }) => theme.color.textDark};
    font-weight: bold;
    text-align: center;
  }
`;

export const OrderName = styled.div`
  width: 20%;

  p {
    color: ${({ theme }) => theme.color.textDark};
    text-align: center;
  }
`;

export const Date = styled.div`
  background: ${({ theme }) => theme.color.textLight};
  width: 10%;

  p {
    color: ${({ theme }) => theme.color.textDark};
    font-weight: bold;
    text-align: center;
  }
`;

export const Status = styled.div`
  background: ${({ theme }) => theme.color.secundario};
  border-radius: 8px;
  margin-left: 32%;
  width: 16%;

  p {
    color: ${({ theme }) => theme.color.textLight};
    font-weight: bold;
    text-align: center;
  }
`;

export const CheckDelivery = styled.button`
  background: ${({ theme }) => theme.color.primario};
  color: ${({ theme }) => theme.color.textLight};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  padding: 8px;
  margin-left: 12px;
`;
